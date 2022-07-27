let r = 255
let g = 255
let b = 255

var ballX;
var ballY;

var ballSpeedX = 8;
var ballSpeedY = 8;

var paddleHeight = 40;
var length = 200;

var backgroundColor = 128
let points = 0;

function setup() {
  createCanvas(800,600);
  noCursor();
  ballX = random(width)
  ballY = random(height / 2);
}
function draw() {
  //frameRate(1)
   background(backgroundColor);

   fill(255, 255, 255);
   textSize(22);
   text("Score: " + points, 30, 30);

  strokeWeight(4);
  stroke(255);
  fill(255);
  rect(mouseX, height - paddleHeight - 4, length, paddleHeight);// Paddle height
  noStroke();
  fill(r,g,b);
  ellipse(ballX, ballY, 20, 20);
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;
  if (ballX < 0 || ballX > width) {
    ballSpeedX = ballSpeedX * -1;
  }
  if (ballY < 0) {
    ballSpeedY = ballSpeedY * -1;
  }
  if (ballY > height - paddleHeight){ // ball is past goal line vertically
    if (ballX > mouseX && ballX < mouseX+length) { // ball is within paddle horizontally
      ballSpeedY = ballSpeedY * -1;
      length -= 25;
      r = random(0,256);
      g = random(0,256);
      b = random(0,256);

      points += 25
    }
    else {
      background(255,0,0)
        fill(0);
      text("GAME OVER!", width / 2, height / 2);
      noLoop();
    }
  }
  if(length <= 0){ // if the paddle length is 0 then a you win screen will appear
    background(0,255,0)
    fill(0);
    text("YOU WIN!", width / 2, height / 2);
    noLoop();
  }
}