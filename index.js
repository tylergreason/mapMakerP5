function setup() {
    // createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    createCanvas(
        cellWidth * mapWidth * 1.5,
        cellHeight * mapHeight*1.5,
        WEBGL
        )
    noStroke()
    angleMode(DEGREES); 
}

let sortedLevel = flattenMatrix(newLevel); 


function draw() {
    background(0);
    frameRate(10);
    push()
    translate(
        (mapHeight*cellHeight /-2),
        mapHeight*cellHeight/-2
        )
    //     drawSortedMap(sortedLevel)
    draw3dMap(sortedLevel)
    pop()
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    // startingScale = 1;  
}     