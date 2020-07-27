const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var drop;
var rand;

function preload(){
    
}

function setup(){

    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;
    
    rand = random(799, 1);
   
    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background(0);

    if(frameCount % 1 === 0){
      var obstacles = createSprite(circle, rand, 700, 20);
    }

    
}   

