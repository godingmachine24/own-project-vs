var bg, bgImg;
var bottomGround;
var topGround;
var ball;
var paddle;
var paddle2;
var score = 0;
var gameOver = false; 
var paddleImg;
var paddle2Img;

function preload() {
  bgImg = loadImage("assets/bg.png");
  ballImg = loadAnimation("assets/ball.png");

  paddleImg=loadImage("assets/paddle.png");
  paddle2Img=loadImage("assets/paddle.png");
  
}

function setup() {
  createCanvas(1000, 900);

  bottomGround = createSprite(500, 850, 1000, 20);
  bottomGround.shapeColor = "blue";
  topGround = createSprite(500, 10, 1000, 20);
  topGround.shapeColor = "blue";

  ball = createSprite(100, 200, 20, 20);
  ball.addAnimation("ball", ballImg);
  ball.velocityY=10;
  ball.scale = 0.08;
  paddle = createSprite(200, 800, 100, 10);
  paddle.addImage(paddleImg)
  paddle.scale=0.2;
  paddle2=createSprite(500,30,200,10);
  paddle2.addImage(paddle2Img)
  paddle2.scale=0.2;
  

  score = 0;
}

function draw() {
  background(bgImg);
  
  if (!gameOver) { 
    if (keyDown("a")) {
      paddle2.velocityX = -7;
    } else if (keyDown("d")) {
      paddle2.velocityX = 7;
    }

    if(!gameOver){
      if(keyDown("LEFT_ARROW")){
        paddle.velocityX=-5;
      }else if(keyDown("RIGHT_ARROW")){
        paddle.velocityX=5;
      }
    }
 
    
    
    if (ball.isTouching(paddle)) {
      ball.bounceOff(paddle);
      score++;
      ball.velocityY = -10;
    }


    if (ball.isTouching(paddle2)) {
      ball.bounceOff(paddle2);
      score++;
      ball.velocityY = 10;
    }

    if(ball.isTouching(topGround)){
      gameOver=true;
    }

    if (ball.isTouching(bottomGround)) {
      
      gameOver = true;
    }

    
  }
  
  drawSprites();

  fill(255);
  textSize(30);
  text("Score: " + score, 20, 30);
  score.shapeColor="green";

  if (gameOver) {
    fill(255);
    textSize(50);
    text("Game Over", width / 2 - 100, height / 2);
  }
}
