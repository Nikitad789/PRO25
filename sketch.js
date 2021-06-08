
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paperball= new paper(150,450)
	paperball.scale=0.1

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  console.log(dustbin.y)
keyPressed();
  groundObject.display();
  dustbinObj.display();
  paperball.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log("Hello!!")
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:24,y:-24})
	}
  }

