const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var upboton;
var rightboton;





function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

var balloptions={
restitution:0.95
}
ball=Bodies.circle(200,100,30,balloptions);
World.add(world, ball);

rightboton=createImg("right.png")
rightboton.position(220,30);
rightboton.size(50,50);
rightboton.mouseClicked(fuerzaX);

upboton=createImg("up.png")
upboton.position(20,30);
upboton.size(50,50);
upboton.mouseClicked(fuerzaY);



}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
push();
ellipseMode(CENTER);
stroke("blue");
fill("cyan");
ellipse(ball.position.x, ball.position.y,30);
pop();

}

function fuerzaY(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

}


function fuerzaX(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  
  
  }
  