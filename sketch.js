
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = loadImage("tree.png");
	boy = loadImage("boy.png");

	ground = new Ground(450, 600, 900, 30);
	stone = new Stone(250, 500, 30);

	mango1 = new Mango(690, 260, 50, 50);
	mango2 = new Mango(650, 190, 50, 60);
	mango3 = new Mango(760, 200, 50, 50);
	mango4 = new Mango(730, 150, 50, 50);
	mango5 = new Mango(580, 270, 50, 50);
	mango6 = new Mango(810, 260, 50, 50);

	string = new String(stone.body,{x:210, y:440});

	Engine.run(engine);
  
}


function draw() {
	imageMode(CENTER);
	background("white");
  
	image(tree, 700, 350, 400, 500);
	image(boy, 250, 510, 150, 300);

	ground.display();
	stone.display();
	string.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    string.fly();
}

function detectCollision(lstone, lmango){
	stonePos = lstone.body.position
	mangoPos = lmango.body.position

	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
	if(distance <= 80){
	    Matter.Body.setStatic(lmango.body,false); 
	}
}