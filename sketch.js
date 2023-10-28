var bg, bgImg;
var bottomGround;
var topGround;
var ball;
var paddle;
var score = 0;


function preload() {
  bgImg = loadImage("assets/bg.png");
  ballImg = loadAnimation("assets/ball.png");
}

function setup() {
  createCanvas(1000, 900);

  bottomGround = createSprite(500, 850, 1000, 20);
  bottomGround.shapeColor= "blue"
  topGround = createSprite(500, 10, 1000, 20);
  topGround.shapeColor="blue"

  ball = createSprite(100, 200, 20, 20);
  ball.addAnimation("ball", ballImg);
  ball.scale = 0.08;
 // ball.setCollider("circle", 0, 0, 70);
  paddle = createSprite(200, 800, 100, 10);
  paddle.shapeColor= "yellow"

  score = 0;
}

function draw() {
  background(bgImg);
  if (keyDown("LEFT_ARROW")) {
      paddle.velocityX = -5;
    } else if (keyDown("RIGHT_ARROW")) {
      paddle.velocityX = 5;
    } 
   ball.velocityY=10;
console.log(ball.y)
    if (ball.isTouching(paddle) && ball.y<=781) {      
        score++;
        ball.bounceOff(paddle)
        ball.velocityY=10;
    }

    // if (ball.isTouching(bottomGround)) {
    //   ball.velocityY = 5;
    //   score--;
      
    // }
  
//   ball.bounceOff(topGround);
//   ball.bounceOff(bottomGround);
//ball.bounceOff(paddle)
  drawSprites();

  fill(255);
  textSize(20);
  text("Score: " + score, 20, 30);

}
