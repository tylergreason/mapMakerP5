function setup() {
    // createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    createCanvas(cellWidth * mapWidth, cellHeight * mapHeight)
    noStroke()
    angleMode(DEGREES); 
}

function draw() {
    background(0);
    frameRate(0);
    noStroke();
    translate((mapHeight * cellHeight)/2, cellHeight * 4)
    drawSortedMap(newLevel)    
  }     