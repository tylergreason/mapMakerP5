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
    let sortedLevel = flattenMatrix(level); 
    sortedLevel.forEach(cell => {
        let yPos = ((cell.x * cellHeight) + ( cell.y * cellWidth))/2
        let xPos = ((cell.x * cellWidth) - (cell.y * cellHeight ))/2.1
        // let xPos = cell.x * cellWidth
        // let yPos = cell.y * cellHeight
        let n = cell.noise;
        let scaledHeight;  
        if (n < waterLine){
            scaledHeight = cellHeight * (n * extremeHeight)
            drawCell(xPos, yPos, cellWidth, scaledHeight, n)   
        }else{
            // scaledHeight = (cellHeight * -((n-waterLine) * extremeHeight) - cellHeight);
            scaledHeight = (cellHeight * -((n-waterLine) * extremeHeight) - cellHeight);
            drawCell(xPos,yPos + cellHeight,cellWidth, scaledHeight, n)
        }

    })
}



// function to draw rectangles 
const drawCell = (x,y,width,height,noise) => {
    // make fill value with landFills 
    landFills(noise); 
    rect(x,y,width,height); 
    // fill(255,0,0)
    // push()
    // shearX(2)
    // shearY(0.5)
    // rect(x,y,width,height)
    // pop()
    // quad(
    //     x,y,
    //     x+cellWidth, y - cellHeight/2,
    //     x+cellWidth, y+cellHeight/2,
    //     x, y+cellHeight
    //     )
    //     fill(0,255,0)
    // quad(
    //     x,y,
    //     x+cellWidth, y - cellHeight/2,
    //     x+cellWidth, y+cellHeight/2,
    //     x, y+cellHeight
    //     )
    //     fill(0,0,255)
    // quad(
    //     x,y,
    //     x+cellWidth, y - cellHeight/2,
    //     x+cellWidth, y+cellHeight/2,
    //     x, y+cellHeight
    //     )


}

const landFills = noise => {
    if (noise < waterLine){
        fill(0,
            0,
            250 * (noise)+70
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
            0)
    }else if (noise > mountainLine && noise < snowLine){
        fill(100 + (Math.random()*10)); 
    }else {
        fill(255); 
    }
}