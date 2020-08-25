const dx = (sides, quantity=1) => {
    let total = 0; 
    for (let i = 0; i < quantity; i++){
        total += Math.floor(Math.random() * sides) +1; 
    }
    console.log(total)
    return total;
}

const randomMapHeight = () => {
    return Math.floor(Math.random()*mapHeight);
}

const randomBetweenNumbers = (low, high) => {
    return Math.floor(Math.random()*high)+low; 
}

// return a number within a certain +/- percent range
const randomInRange = (num, rangePercent) => {
    //find amount of num to find random part of 
    const percentOfNum = num * rangePercent; 
    // find random portion of that number 
    const randomPortion = Math.random()*percentOfNum; 
    // 50% that number is positive or negative 
    Math.random() > 0.5 ?
    num -= randomPortion
    : 
    num += randomPortion
    return num;
}

// function to make a random time within a range for an animation duration
const randomDuration = (minimum, maximum) => {
    return (Math.random()* (maximum - minimum)) + minimum
}