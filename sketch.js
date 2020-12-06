
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var box1,box2,box3
function preload()
{
	
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-50,width,10)
	box1 = new Box(width-300,height-65,200,20)
  box2 = new Box(width-410,height-115,20,100)
  box3 = new Box(width-190,height-115,20,100)
  ball = new Ball(100,300,25,25)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  ball.display()
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x: 30,y: -30})
  }
}


