const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon
var slingshot

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  //console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  //my Level One
 myblock1 = new Block(640,178,25,30)
 myblock2 = new Block(670,178,25,30)
 myblock3 = new Block(690,178,25,30)
 myblock4 = new Block(710,178,25,30)
 myblock5 = new Block(740,178,25,30)
 myblock6 = new Block(755,179,25,30)
  //my Level Two
 myblock7 = new Block(665,150,25,30)
 myblock8 = new Block(690,150,25,30)
 myblock9 = new Block(715,150,25,30)
 myblock10 = new Block(740,150,25,30)
  //my Level Three
 myblock11 = new Block(690,120,25,30)
 myblock12 = new Block(715,120,25,30)
  //my Level Four
 myblock13 = new Block(700,100,25,30)

 polygon = new Polygon(300,200,50,50)

 slingshot = new Slingshot(polygon.body,{x:100,y:200})
 

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("blue")
  myblock1.display();
  myblock2.display();
  myblock3.display();
  myblock4.display();
  myblock5.display();
  myblock6.display();
  fill("pink")
  myblock7.display();
  myblock8.display();
  myblock9.display();
  myblock10.display();
  fill("turquoise")
  myblock11.display();
  myblock12.display();
  fill("grey")
  myblock13.display();

  polygon.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.release();
}