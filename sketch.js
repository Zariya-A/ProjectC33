const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var snowflakes;

function preload(){
  backgroundImg = loadImage("snowbg.jpg")
  kidImg = loadImage("skikid1.png")
  kidImgR = loadImage("skikid1R.png")
  snowImg = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  kid = createSprite(400, 270, 50, 50);
  kid.addImage(kidImg);
  kid.scale = 0.1;

  ground = createSprite(400, 400, 800, 10);
  ground.visible = false;

  snowflakes = new Snow(600, 0, 50, 50);

} 

function draw() {
  background(backgroundImg);  
    
  Engine.update(engine);
  
  snowing();

  if(keyDown(37)){
    kid.addImage(kidImg);
    kid.x -= 5;
    kid.y += 1;
  }
  
  if(keyDown(39)){
    kid.addImage(kidImgR);
    kid.x +=5;
    kid.y -= 1;
  }


  snowflakes.display();
  drawSprites();
}



function snowing() {
  if (frameCount % 60 === 0) {
    snowflakes = new Snow(snowflakes.x, 0, 50, 50);
    snowflakes.x = Math.round(random(0, 800));
    snowflakes.velocityY = 3;
  }
  console.log(snowflakes.x)
}
