const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var ground;
var left;
var right;
var top_wall;
var bttn1;
var bttn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  bttn1 = createImg("right.png");
  bttn1.position(220,30);
  bttn1.size(50,50);
  bttn1.mouseClicked(applyforce);

  bttn2 = createImg("up.png");
  bttn2.position(20,30);
  bttn2.size(50,50);
  bttn2.mouseClicked(applyVforce);

  var options = {
    restitution: 1
  }

  ball = Bodies.circle(200,200,20,options);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
}

function applyforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0});
}

function applyVforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});
}