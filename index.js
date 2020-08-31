function setup() {
    // createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    createCanvas(cellWidth * mapWidth * 2, cellHeight * mapHeight * 2)
    noStroke()
    angleMode(DEGREES); 
    rotate(45)
}

function draw() {
    background(0);
    // scale(startingScale)
    frameRate(0);
    translate((mapHeight * cellHeight/2), mapHeight *1)
    drawSortedMap(newLevel)  
    // startingScale = 1;  
}     