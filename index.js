function setup() {
    createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    noStroke()
    // for (let i = 0; i < newLevel.length; i++){
    //     for (let j = 0; j < newLevel[i].length; j++){
    //         let cell = newLevel[i][j];
    //         if (cell.noise < 0.5){
    //             fill(0,0,250 * (cell.noise * 2))
    //             rect(i * cellWidth, j * cellHeight, randomBetweenNumbers(cellWidth, cellWidth * 1.4), cellHeight);
    //         }else if (cell.noise > 0.5 && cell.noise < 0.55){
    //             fill(`#e2d9bc`)
    //         }else {
    //             fill(0,250 * (cell.noise),0)
    //         }
    //         rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
    //     }
    // }
  }
  
  function draw() {
    frameRate(0);
    newLevel.forEach((row, i) => {
        row.forEach((cell, j) => {
            //land tiles 
            if (cell.noise > landLine){
                fill(0,250 * (cell.noise),0)
                rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
            }
            // shore tiles 
            if (cell.noise > waterLine && cell.noise < landLine){
                fill(`#e2d9bc`)
                rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
            }
            // water tiles 
            if (cell.noise < waterLine){
                fill(0,0,250 * (cell.noise * 2))
                rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
            }
        })
    })   
    // ocean waves 
    newLevel.forEach((row, i) => {
        row.forEach((cell, j) => {
                if (cell.noise < waterLine){
                    fill(0,0,250 * (cell.noise * 2))
                    rect(i * cellWidth, 
                        j * cellHeight, 
                        randomBetweenNumbers(cellWidth, 1.5), 
                        randomBetweenNumbers(cellHeight, 1.5)
                        );
                }
        })
    })
  }     