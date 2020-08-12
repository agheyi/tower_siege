const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, sling, poly;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  poly = new Polygon();
  sling = new Slingshot(poly.body, {x: 40, y: 40})

  ground = new Ground(width/2, height-25, width, 20);
  platform = new Ground(width/2-15, height/2, 200, 20);
  

  box1 = new Box(330, 190, "pink");
  box2 = new Box(355, 190, "pink");
  box3 = new Box(385, 190, "pink");
  box4 = new Box(415, 190, "pink");
  box5 = new Box(445, 190, "pink");

  boxa = new Box(345, 170, "lightBlue");
  boxb = new Box(385, 170, "lightBlue");
  boxc = new Box(415, 170, "lightBlue");

  box0 = new Box(385, 150, "lightGreen")

}

function draw() {  
  background(0);  
  ground.display();
  platform.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  boxa.display();
  boxb.display();
  boxc.display();

  box0.display();

  poly.display();
  sling.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(poly.body, {x: mouseX, y: mouseY})
}
function mouseReleased()
{
    sling.fly();
}