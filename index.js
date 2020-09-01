function setup() {
    // createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    createCanvas(cellWidth * mapWidth * 1, cellHeight * mapHeight * 1)
    noStroke()
    angleMode(DEGREES); 
    rotate(45)
}

function draw() {
    background(0);
    // scale(startingScale)
    frameRate(0);
    translate(
        (mapHeight * cellHeight/2),
        mapHeight * cellHeight/4
        )
    drawSortedMap(newLevel)  
    // startingScale = 1;  
}     