const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,options)
  World.add(world,ground)
  var Ball_options = {
   restitution: 0.8
  }
  Ball = Bodies.circle(100,200,30,Ball_options)
  World.add(world,Ball)
}

function draw() {
  background("blue"); 
  Engine.update(engine)
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS) 
  ellipse(Ball.position.x,Ball.position.y,30)
}