let snowflakes = [];

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background("#1B2A49");
  noStroke();
  
  
  
  
  fill("white");
  ellipse(100,100,100,100);
  
  //triangleshade_5
  fill("#b21f66");
  triangle(500,500,600,300,750,500);
  
  //triangle2
  fill("#b21f66");
  triangle(150,500,300,300,450,500);
  
  //triangle1_shade
  fill("#e08f62");
  triangle(100,500,150,300,370,500);
  //triangle1
  fill("#FFBD69");
  triangle(0,500,150,300,300,500);
  
  //triangle4
  fill("#ffa259");
  triangle(350,500,550,300,700,500);
  fill("#ffbd69");
  triangle(400,500,550,300,700,500);
  
  //triangle3 
  fill("#bc4873");
  triangle(250,500,400,300,550,500);
  fill("#FE346E");
  triangle(300,500,400,300,550,500);
  
  //triange5
  fill("#F65C78");
  triangle(500,500,600,300,700,500);
  
  fill("#b21f66");
  triangle(0,500,0,300,150,500);
  fill("#F65C78");
  triangle(0,500,0,300,120,500);
  
  
    let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
  
  
}



function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    fill("white")
    ellipse(this.posX, this.posY, this.size);
  };
}
