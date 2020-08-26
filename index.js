function setup() {
    createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    noStroke()
}

function draw() {
    frameRate(0);
    newLevel.forEach((row, i) => {
        row.forEach((cell, j) => {
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
                let scaledHeight = cellHeight * (5 * (cell.noise)); 
                console.log(scaledHeight);
                rect(i * cellWidth, j * cellHeight, cellWidth, 40);
            }
        })
    })   
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
                if (cell.noise > landLine){
                    fill(0,250 * (cell.noise),0)
                    let scaledHeight = cellHeight * (5 * (cell.noise) * -1); 
                    console.log(scaledHeight);
                    // stroke(0)
                    rect(i * cellWidth, j * cellHeight, cellWidth, scaledHeight);
                    noStroke();
                }
        })
    })
  }     