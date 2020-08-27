function setup() {
    // createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    createCanvas(2000,2000)
    noStroke()
    angleMode(DEGREES); 
}

function draw() {
    frameRate(0);
    noStroke();
    translate((mapWidth * cellWidth)/4, mapWidth/2)
    
    drawMap(newLevel)    
  }     