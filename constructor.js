// make function to create a level, which is  a grid of divs 
const createLevel = (height, width=height) => {
    // let level = document.createElement('div'); 
    let level = []; 
    // level.classList.add('level');  
    for (let i = 0; i < height; i++){
        // create array to hold arrays of divs 
        let row = []; 
        for (let j = 0; j < width; j++){
            row.push({
                // element: rect(j,i,cellWidth,cellHeight),
                x: j, 
                y: i,
            }); 
        }
        level.push(row); 
    }
    return level; 
}

// this file runs functions to actually create the map
const levelWidth = 100 //number of tiles wide
const levelHeight = levelWidth;
let newLevel = createLevel(levelHeight);



// apply noise values to each cell for use in styling
applyNoise(newLevel, 0.1);


const randomCloudNumber = randomBetweenNumbers(3,7);
for (let i = 0; i < randomCloudNumber; i++){
    // turn off clouds for now 
    // generateCloud(map)
}

// test making the land and water dependent on the cell's noise value 
newLevel.forEach(row => {
    row.forEach(cell => {
        // console.log(cell.element.style);
        if (cell.noise < 0.5){
            cell.element.style.backgroundColor = `rgb(0,0,${250 * (cell.noise * 2)})`
        }else if (cell.noise > 0.5 && cell.noise < 0.55){
            cell.element.style.backgroundColor = `#e2d9bc`
        }else {
            // cell.element.style.backgroundColor = `rgb(0,${250 * (1-cell.noise * 2)},0)`
            cell.element.style.backgroundColor = `rgb(0,${250 * (cell.noise)},0)`
        }
    })
})