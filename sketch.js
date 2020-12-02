
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var ball, bin, gr;


function setup() {
	var canvas= createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	/*box1=createSprite(800,height-35,200,20);
	box1.shapeColor=color("black");	
	
	box2=createSprite(900,height-75,20,100);
	box2.shapeColor=color("black");	

	box3=createSprite(700,height-75.15,20,100);
	box3.shapeColor=color("black");	*/

  bin = new Dustbin(200,300,450,250);
  ball =new paper(100,358,30,30);
  gr = new Ground(600,383,1200,20);

  var render = Render.create( {
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 700,
      wireframes: false
    }

  });
  
  Engine.run(engine);
  //Render.run(render);
  
}


function draw() {
  background("DodgerBlue");

  Engine.update(engine);



  bin.display();
  ball.display();
  gr.display();
  
  drawSprites();
 
}

function keyPressed() {
  if(keyCode===UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, {x:800, y:height-45})
  }

}

