function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    // background(220);
    fill(200,0,0)
    noStroke()
    for (let i = 0; i < 20; i++){
        for (let j = 0; j < 20; j++){
            rect(i * 20, j * 20, 20,20);
        }
    }
  }