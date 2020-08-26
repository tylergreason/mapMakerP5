let cellWidth = 18; 
const cellHeight = cellWidth; 
const mapWidth = 50; 
const mapHeight = mapWidth; 
const P5 = new p5;

// points in noise at which terrain types come into effect 
const waterLine = 0.5; 
// const shoreLine = waterLine + 0.05; 
const landLine = 0.05 + waterLine; 

const rotationValue = 30;