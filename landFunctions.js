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
            let yPos = ((h * cellHeight) + ( w * cellWidth))/2
            let xPos = ((w * cellWidth) - (h * cellHeight ))/2.1
            let scaledHeight = cellHeight * -(4 * (cell.noise)); 

            if (cell.noise < waterLine){
                fill(0,0,250 * (cell.noise * 2))
                // rect(xPos, yPos, cellHeight, cellHeight * 4 * (1 - cell.noise));
                rect(xPos, yPos, cellHeight, cellHeight);
            }
            // // shore tiles 
            if (cell.noise > waterLine && cell.noise < landLine){
                fill(`#e2d9bc`)
                rect(xPos, yPos, cellWidth, cellHeight);
            }
            //land tiles 
            if (cell.noise > landLine){
                fill(0,255 * (cell.noise),0)
                // console.log(scaledHeight);
                // stroke(0)
                rect(xPos, yPos+cellHeight, cellWidth, scaledHeight);
            }
        })
    })
}

// function to make sure the map is drawn in the order of cells, hightest to lowest 
const drawSortedMap = level => {
    let sortedLevel = combineAndSort(level, noise); 
    sortedLevel.forEach(cell => {
        let yPos = ((cell.x * cellHeight) + ( cell.y * cellWidth))/2
        let xPos = ((cell.x * cellWidth) - (cell.y * cellHeight ))/2.1
        let n = cell.noise;
        let scaledHeight;  
        if (n < waterLine){
            scaledHeight = cellHeight * (n * extremeHeight)
            fill(0,0,250 * (cell.noise * 2))
            rect(xPos, yPos, cellHeight, cellHeight);
        }else{
            scaledHeight = (cellHeight * -((n-waterLine) * extremeHeight) - cellHeight);
            // console.log(scaledHeight); 
            // // shore tiles 
            if (cell.noise > waterLine && cell.noise < landLine){
                fill(`#e2d9bc`)
                rect(xPos, yPos + cellHeight, cellWidth, scaledHeight);
            }
            //land tiles 
            if (cell.noise > landLine && cell.noise < mountainLine){
                fill(
                    0, 
                    (180 * (cell.noise)) + (Math.random()*5),
                    0)
                // console.log(scaledHeight);
                // stroke(0)
                rect(xPos, yPos + cellHeight, cellWidth, scaledHeight);
            }
            if (cell.noise > mountainLine && cell.noise < snowLine){
                fill(100 + (Math.random()*10)); 
                rect(xPos, yPos + cellHeight, cellWidth, scaledHeight);
            }
            else if (cell.noise > snowLine){
                fill(255); 
                rect(xPos, yPos + cellHeight, cellWidth, scaledHeight);
            }
        }

    })
}

// function to draw rectangles 
const drawCell = (x,y,width,height,noise) => {
    if (noise > waterLine && noise < landLine){
        fill(
            0,
            0,
            250 * (noise * 2)
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

const landFills = noise => {
    if (noise < waterLine){
        return fill()
    }
}