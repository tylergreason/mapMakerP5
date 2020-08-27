// make function to create a level, which is  a grid of divs 
const createLevel = (height, width=height) => {
    // let level = document.createElement('div'); 
    let level = []; 
    let yOff = 0; 
    let inc = noiseInc; 
    // level.classList.add('level');  
    for (let i = 0; i < height; i++){
        // create array to hold arrays of divs 
        let row = []; 
        let xOff = 0; 
        for (let j = 0; j < width; j++){
            // create noise value using P5JS 
            // const newNoise = P5.noise(xOff, yOff); 
            let newNoise = P5.noise(xOff, yOff); 
            // let newNoise = 0;
            // for (let i = 1; i <= 2; i+= 0.5){
            //     newNoise += .1/i * (P5.noise(i * xOff, i * yOff));
            // }
            let type; 
            if (newNoise < 0.5){
                type = 'water'
            }else{
                type = 'not-water'
            }
            row.push({
                noise: newNoise,
                x: j, 
                y: i,
                type: type
            }); 
            xOff += inc; 
        }
        level.push(row);
        yOff += inc; 
    }
    return level; 
}

let newLevel = createLevel(mapWidth);

// apply noise values to each cell for use in styling
// applyNoise(newLevel, 0.1);


const randomCloudNumber = randomBetweenNumbers(3,7);
for (let i = 0; i < randomCloudNumber; i++){
    // turn off clouds for now 
    // generateCloud(map)
}
