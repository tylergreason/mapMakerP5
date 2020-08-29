const mergeSort = (array,value = false) => {
    if (array.length <= 1){ 
        return array; 
    }

    const middle = Math.floor(array.length/2)
    const leftArray = array.slice(0,middle); 
    const rightArray = array.slice(middle); 
    return mergeByValue(mergeSort(leftArray,value), mergeSort(rightArray,value), value); 
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

const combineAndSort = (level, value) => {
    // combine arrays into one array 
    let returnArray = []; 
    level.forEach(row => row.forEach(cell => returnArray.push(cell))); 
    return returnArray.sort((a, b) => {
        if (a[value] < b[value]){
            return -1
        }
        if (a[value] > b[value]){
            return 1
        }
        return 0 
    }) 
}

// function to turn matrix into one dimensional array 
const flattenMatrix = matrix => {
    let returnArray = []; 
    matrix.forEach(row => {
        row.forEach(cell => {
            returnArray.push(cell); 
        })
    })
    return returnArray; 
}
let s = [3,1,2,5,4]

let e = [{a: 300}, {a: 1}, {a: 2}, {a: 5}, {a: 4}]
console.log(s);
console.log(mergeSort(s))
e.forEach(i => console.log(i.a))
e = mergeSort(e, 'a')
let string = ''
e.forEach(i =>string = string.concat(i.a + ' '))
console.log(string);