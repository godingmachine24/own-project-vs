var bg, bgImg;
var bottomGround;
var topGround;
var ball;
var paddle;
var score = 0;
var gameOver = false; 
var paddleImg;

function preload() {
  bgImg = loadImage("assets/bg.png");
  ballImg = loadAnimation("assets/ball.png");

  paddleImg=loadImage("assets/paddle.png");
  
}

function setup() {
  createCanvas(1000, 900);

  bottomGround = createSprite(500, 850, 1000, 20);
  bottomGround.shapeColor = "blue";
  topGround = createSprite(500, 10, 1000, 20);
  topGround.shapeColor = "blue";

  ball = createSprite(100, 200, 20, 20);
  ball.addAnimation("ball", ballImg);
  ball.scale = 0.08;
  paddle = createSprite(200, 800, 100, 10);
  paddle.addImage(paddleImg)
  paddle.scale=0.2;
  paddle.shapeColor = "yellow";

  score = 0;
}

function draw() {
  background(bgImg);
  
  if (!gameOver) { 
    if (keyDown("LEFT_ARROW")) {
      paddle.velocityX = -5;
    } else if (keyDown("RIGHT_ARROW")) {
      paddle.velocityX = 5;
    }
    
    ball.velocityY=10;

    if (ball.isTouching(paddle)) {
      ball.bounceOff(paddle);
      score++;
      ball.velocityY = -500;
    }
    if(ball.isTouching(topGround)){
      ball.bounceOff(topGround)
    }

    if (ball.isTouching(bottomGround)) {
      
      gameOver = true;
    }

    
  }
  
  drawSprites();

  fill(255);
  textSize(30);
  text("Score: " + score, 20, 30);

  if (gameOver) {
    fill(255);
    textSize(50);
    text("Game Over", width / 2 - 100, height / 2);
  }
}
