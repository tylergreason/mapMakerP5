let cellWidth = 30; 
const cellHeight = cellWidth; 
const mapWidth = 100; 
const mapHeight = mapWidth;
const noiseInc = 0.05;
const P5 = new p5;
let startingScale = 1; 
// highest or lowest cells should be displayed 
const extremeHeight = 10; 

// points in noise at which terrain types come into effect 
const waterLine = 0.5; 
// const shoreLine = waterLine + 0.05; 
const landLine = 0.02 + waterLine; 
const snowLine = 0.8; 
const mountainLine = snowLine - 0.1
const rotationValue = 30;