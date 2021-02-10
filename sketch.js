var movingRect,fixedRect

function setup() {
  createCanvas(1000,400);
  fixedRect=createSprite(400, 200, 50, 100);
  fixedRect.shapeColor="red";

  movingRect= createSprite(600,200,100,50);
  movingRect.shapeColor="yellow";
  
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if (touching(movingRect,fixedRect)) {
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="cyan";
  }
  else {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="yellow";
  }
  drawSprites();
}
function touching(object1,object2){
  if (object1.x-object2.x <= (object1.width/2+object2.width/2) 
  && object2.x-object1.x <= (object1.width/2+object2.width/2)
  && object1.y-object2.y <=  (object1.height/2+object2.height/2)
  && object2.y-object1.y <=  (object1.height/2+object2.height/2)) {
    return true;
}
else {
    return false;
}

}


