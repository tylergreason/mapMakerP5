function setup() {
    // createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    createCanvas(2000,2000)
    noStroke()
    angleMode(DEGREES); 
}

function draw() {
    frameRate(0);
    // rotate(-rotationValue)
    noStroke();
    translate((mapWidth * cellWidth)/4, mapWidth/3)
    
    newLevel.forEach((row, i) => {
        row.forEach((cell, j) => {
            // rotate(-rotationValue)
            // translate((mapWidth * cellWidth),0)
            // water tiles 
            fill(0)
            if (cell.noise < waterLine){
                fill(0,0,250 * (cell.noise * 2))
                rect(i * cellWidth, j * cellHeight, cellHeight, cellHeight);
            }
            // // shore tiles 
            if (cell.noise > waterLine && cell.noise < landLine){
                fill(`#e2d9bc`)
                rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
            }
            //land tiles 
            if (cell.noise > landLine){
                fill(0,250 * (cell.noise),0)
                let scaledHeight = cellHeight * (4 * (cell.noise) * -1); 
                // console.log(scaledHeight);
                // stroke(0)
                rect(i * cellWidth, j * (cellHeight) + cellHeight, cellWidth, scaledHeight);
            }
            // rotate(rotationValue);
        })
    })       
    // rotate(rotationValue)
    // translate(0, -30)
    // ocean waves 
    newLevel.forEach((row, i) => {
        row.forEach((cell, j) => {
                // if (cell.noise < waterLine){
                    // fill(0,0,250 * (cell.noise * 2))
                    // rect(i * cellWidth, 
                    //     j * cellHeight, 
                    //     randomBetweenNumbers(cellWidth, 1.5), 
                    //     randomBetweenNumbers(cellHeight, 1.5)
                    //     );
                // }
        })
    })
  }     