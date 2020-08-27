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
    translate(mapHeight * cellHeight, mapHeight * cellHeight/2)
    
    drawMap(newLevel)    
  }     