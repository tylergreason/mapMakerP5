// function to fill level with one type of glyph
const fillWithGlyph = (level, glyph) => {
    level.forEach(row => {
        row.forEach(cell => {
            applyStyles(glyph, cell);
            // console.log(cell);
        })
    })
}

// function to make the inner text of each element in the level the perlin noise of that cell
const showNoise = level => {
    level.forEach(row => {
    row.forEach(cell => {
        cell.element.innerText = cell.noise;
    })
    })
}


// apply glyph style to cell div 
const applyStyles = (glyph, cell) => {
    let styles = glyph.styles; 
    // make this function work for arguments of either a level coordinate or an element itself 
    let elementToStyle; 
    if (cell.element){
        elementToStyle = cell.element; 
    }else{
        elementToStyle = cell; 
    }
    //remove old inline styles 
    elementToStyle.style = "";
    // iterate through styles and apply them to cell style 
    Object.keys(styles).forEach(property => {
        elementToStyle.style[property] = styles[property]
    })
    // change cell inner text 
    // cell.innerText = glyph.text;

    // if cell has background function that uses noise, apply that 
    if (glyph.background){
        elementToStyle.style.backgroundColor = glyph.background(cell.noise);
    }
    cell.glyph = glyph.name; 
}

// function to make terraces according to the article below 
// https://www.redblobgames.com/maps/terrain-from-noise/#terraces
const terraces = (noise, levels) => {
    // take a noise value and see which of the levels it applies to,
    // then return a new value accordingly. 
    for (let i = 0; i < levels; i++){
        if (noise >= 1/i){
            return (1/levels)*i; 
        }
    }
}

// below method is not used, in favor of the drawSortedMap function below 
const drawMap = level => {
    level.forEach((row, h) => {
        row.forEach((cell, w) => {
            let yPos = ((cell.x * cellHeight) + ( cell.y * cellWidth))/2
            let xPos = ((cell.x * cellWidth) - (cell.y * cellHeight ))/2.1
            let n = cell.noise;
            let scaledHeight;  
            if (n < waterLine){
                scaledHeight = cellHeight * (n * extremeHeight)
                drawCell(xPos, yPos, cellWidth, scaledHeight, n)   
            }else{
                scaledHeight = (cellHeight * -((n-waterLine) * extremeHeight) - cellHeight);
                drawCell(xPos,yPos + cellHeight,cellWidth, scaledHeight, n)
        }
        })
    })
}

// function to make sure the map is drawn in the order of cells, hightest to lowest 
const drawSortedMap = level => {
    // let sortedLevel = combineAndSort(level, noise); 
    // make level into one array first
    level.forEach(cell => {
        let xPos = ((cell.x * cellWidth) - (cell.y * cellHeight ))/2.1
        let yPos = ((cell.x * cellHeight) + ( cell.y * cellWidth))/3
        // let xPos = cell.x * cellWidth
        // let yPos = cell.y * cellHeight
        let n = cell.noise;
        let scaledHeight;  
        if (n < waterLine){
            scaledHeight = cellHeight * (n * extremeHeight)
            drawCell(xPos, yPos + cellHeight, cellWidth, scaledHeight, n)   
        }else{
            scaledHeight = (cellHeight * -((n-waterLine) * extremeHeight) - cellHeight);
            scaledHeight = cellHeight * (n * extremeHeight)
            drawCell(xPos,yPos + cellHeight,cellWidth, scaledHeight, n)
        }

    })
}

const draw3dMap = level => {
    // assumes level has been sorted into one long array 
    level.forEach(cell => {
        let xPos = cell.x * cellWidth; 
        let yPos = cell.y * cellHeight; 
        // set color
        landFills(cell.noise); 
        push() 
            translate(xPos, yPos)
            box(cellWidth, cellHeight, extremeHeight * cell.noise); 
        pop()
    })
    // draw water plane 
    push()
        fill(0,0,255,255/2)
        translate(
            mapHeight*cellHeight /2,
            mapHeight*cellHeight/2,
            - waterLine * 0.5 * extremeHeight
            )
        plane(mapWidth * cellWidth, mapHeight * cellHeight); 
    pop()
}

// function to draw rectangles 
const drawCell = (x,y,width,height,noise) => {
    // make fill value with landFills 
    // create a cube for each value of n * 10 
    let newNoise, newY; 
    landFills(noise); 
    newNoise = noise * extremeHeight; 
    newY = y - (cellHeight * newNoise)
    newY = y - height;
    // draw 3 quads representing a vertical cube 
    quadRight(x,y,width,newY)
    quadLeft(x,y,width,newY)
    quadTop(x,y,width,newY)
    if (noise <= waterLine){ 
        // keep the water level constant at the waterLine
        newY = y - (cellHeight * Math.floor(waterLine * extremeHeight))
        fill(0,0,255,200)
        quadTop(x,y,width,newY)
    }
}

// functions for making the parts of a cube tile 
const quadTop = (x,y,width,height) => {
    quad(
        x,height,
        x + width/2, height + cellHeight/3,
        x, height + cellHeight/1.5,
        x + -width/2, height + cellHeight/3
        )
}

const quadLeft = (x,y,width,height) => {
    quad(
        x, height + cellHeight/1.5,
        x - width/2, height + cellHeight/3,
        x - width/2, y + cellHeight,
        x,y + (4 * cellHeight/3)
        )
}

const quadRight = (x,y,width,height) => {
    quad(
        x, height + cellHeight/1.5,
        x + width/2, height + cellHeight/3,
        x + width/2,y + cellHeight,
        x,y + (4 * cellHeight/3)
        )
}

const landFills = noise => {
    if (noise < waterLine){
        fill(
            215 + (Math.random()*20),
            207+ (Math.random()*20),
            182+ (Math.random()*20)
            )
    }
    else if (noise > waterLine && noise < landLine){
        fill(
            215 + (Math.random()*20),
            207+ (Math.random()*20),
            182+ (Math.random()*20)
            )
    }else if (noise > landLine && noise < mountainLine){
        fill(
            0, 
            (180 * (noise)) + (Math.random()*5),
            0
            )
            
    }else if (noise > mountainLine && noise < snowLine){
        fill(100 + (Math.random()*10)); 
    }else {
        fill(255); 
    }
}