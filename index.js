function setup() {
    // createCanvas(mapWidth * cellWidth, mapHeight * cellHeight);
    createCanvas(
        cellWidth * mapWidth * 1.5,
        cellHeight * mapHeight*1.5,
        WEBGL
        )
    noStroke()
    angleMode(DEGREES); 
    rotateZ(900);
    // rotateX(180);
}

let sortedLevel = flattenMatrix(newLevel); 


function draw() {
    background(0);
    frameRate(0);
    rotateX(250);
    translate(
        (mapHeight*cellHeight /-2),
        mapHeight*cellHeight/-2
        )
    //     drawSortedMap(sortedLevel)
    draw3dMap(sortedLevel)

    // startingScale = 1;  
}     