var box1 
var box2
function setup() {
  createCanvas(800,600);
  box1 = createSprite (400, 200, 50, 50);
  box2=createSprite(400,400,50,50)
  box3 = createSprite (500, 200, 50, 50);
  box4=createSprite(500,400,50,50)
  box1.velocityY=5
  box2.velocityY=-5
  box3.velocityY=5
  box4.velocityY=-5

}

function draw() {
  background(0,0,0);  
  drawSprites();
  if ( bounce(box1,box2)){
    box2.shapeColor="purple"
        box1.shapeColor="purple"
        box1.velocityY=box1.velocityY*-1
        box2.velocityY=box2.velocityY*-1
  }else{
    box2.shapeColor="blue"
  box1.shapeColor="red"
  }
  if ( bounce(box3,box4)){
    box4.shapeColor="purple"
        box3.shapeColor="purple"
        box3.velocityY=box3.velocityY*-1
        box4.velocityY=box4.velocityY*-1
  }else{
    box4.shapeColor="blue"
  box3.shapeColor="red"
  }
  
  // box2.y=mouseY
  // box2.x=mouseX
  
}