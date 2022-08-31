
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball; 
var ground;
var b1, b2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,30,ball_options)
	World.add(world,ball);

	ground = new Ground(400,600,800,10);
	b2= new Bucket(550,565,10,60);
	b1= new Bucket(700,565,10,60);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  

  ground.show();
  b1.show();
  b2.show();

  ellipse(ball.position.x,ball.position.y,30);
  drawSprites();
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position,{x:85,y:-85});
	}
}




