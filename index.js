function setup() {
    createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    noStroke()
    for (let i = 0; i < newLevel.length; i++){
        for (let j = 0; j < newLevel[i].length; j++){
            let cell = newLevel[i][j];
            if (cell.noise < 0.5){
                fill(0,0,250 * (cell.noise * 2))
                rect(i * cellWidth, j * cellHeight, randomBetweenNumbers(cellWidth, cellWidth * 1.4), cellHeight);
            }else if (cell.noise > 0.5 && cell.noise < 0.55){
                fill(`#e2d9bc`)
            }else {
                // cell.element.style.backgroundColor = `rgb(0,${250 * (1-cell.noise * 2)},0)`
                fill(0,250 * (cell.noise),0)
            }
            rect(i * cellWidth, j * cellHeight, cellWidth, cellHeight);
        }
    }
  }
  
  function draw() {

  }