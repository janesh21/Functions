function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite (100,200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite (600,200,80,30);
  movingRect.shapeColor = "green";

  movingRect.velocityX=-5;
  //movingRect.velocityY=;
  fixedRect.velocityX=5;
}

function draw() {
  background(0);  

 if (isTouching(movingRect,fixedRect)){
   bounceOff(movingRect,fixedRect);
 }
  drawSprites();

  
}

