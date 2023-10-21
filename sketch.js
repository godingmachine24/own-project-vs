var bg, bgImg
var bottomGround;
var topGround;
var balloon, balloonImg
var paddle;






function preload(){
bgImg = loadImage("assets/bg.png");
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

}



function setup(){
    createCanvas(2000,1000)
  
  
 
 
}



function draw(){
    background(bgImg)
    drawSprites();
}