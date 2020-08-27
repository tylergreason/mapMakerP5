function setup() {
    // createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    createCanvas(2000,2000)
    noStroke()
    angleMode(DEGREES); 
}

function draw() {
    background(0);
    frameRate(0);
    noStroke();
    translate(0.5 * (mapHeight * cellHeight), cellHeight * 4)
    
    drawMap(newLevel)    
  }     