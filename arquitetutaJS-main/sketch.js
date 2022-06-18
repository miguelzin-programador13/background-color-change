var box;

function setup() {
  createCanvas(800,400);
  box = createSprite(200,200,50,80);
  box.shapeColor = "green";

  

}

function draw() {
  background(255,255,255); 
  
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x +1
    background("blue")
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x -1
    background("yellow")
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y +1
    background("green")
}
if(keyIsDown(UP_ARROW)){
  box.position.y = box.position.y -1
  background("red")
}
}