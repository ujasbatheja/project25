
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground;
var paper;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	var object_options={
		isStatic:true
	}
	ground= Bodies.rectangle(600,height,1200,20,object_options);
	World.add(world,ground);

	paper= new Paper(200,200,10);
  
	box1= new Box(1000,320,20,200);
	box2= new Box(925,330,200,20);
	box3= new Box(850,320,20,200);

	Engine.run(engine);
  
}


function draw() {
  background("white"); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20);
  
  box1.display();
  box2.display();
  box3.display();
  paper.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-3})
	}
}


