var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 90, 30);
  fixedRect = createSprite(400, 200, 50, 50);

  movingRect.shapeColor = 'green';
  fixedRect.shapeColor = 'green';

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0,0,0);  

  console.log(movingRect.x - fixedRect.x);

  movingRect.x = World.mouseX
  movingRect.y = World.mouseY;

  
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    &&  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)  {


    movingRect.shapeColor = 'red';
  fixedRect.shapeColor = 'red';  
  } else {
    movingRect.shapeColor = 'green';
  fixedRect.shapeColor = 'green';
  }


  drawSprites();
}