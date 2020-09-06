function setup() {
    // createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    createCanvas(
        cellWidth * mapWidth * 2,
        cellHeight * mapHeight * 2,
        WEBGL
        )
    noStroke()
    angleMode(DEGREES); 
    rotate(45)
}

let sortedLevel = flattenMatrix(newLevel); 


function draw() {
    background(0);
    // scale(startingScale)
    frameRate(0);
    push()
    translate(
        (mapHeight * cellHeight/2),
        mapHeight * cellHeight/4
        )
        drawSortedMap(sortedLevel)
    pop()
    // startingScale = 1;  
}     