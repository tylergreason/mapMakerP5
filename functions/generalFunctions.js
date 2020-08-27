const mergeSort = (array,value = false) => {
    if (array.length <= 1){ 
        return array; 
    }

    const middle = Math.floor(array.length/2)

    const leftArray = array.slice(0,middle); 
    const rightArray = array.slice(middle); 
    if (value){
        return mergeByValue(mergeSort(leftArray), mergeSort(rightArray), value); 
    } else {
        return mergeByValue(mergeSort(leftArray), mergeSort(rightArray)); 
    }
}

const mergeByValue = (leftArray, rightArray, value) => {
    let returnArray = [], leftIndex = 0, rightIndex = 0; 
    if (value){
        while (leftIndex < leftArray.length && rightIndex < rightArray.length){
            if (leftArray[leftIndex][value] <= rightArray[rightIndex][value]){
                returnArray.push(leftArray[leftIndex])
                leftIndex +=1; 
            }else {
                returnArray.push(rightArray[rightIndex])
                rightIndex +=1; 
            }
        }
    }else{
        while (leftIndex < leftArray.length && rightIndex < rightArray.length){
                if (leftArray[leftIndex] <= rightArray[rightIndex]){
                returnArray.push(leftArray[leftIndex])
                leftIndex +=1; 
            }else {
                returnArray.push(rightArray[rightIndex])
                rightIndex +=1; 
            }
        }
    }

    return returnArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}