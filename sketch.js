const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var bird;
var pig1,pig2;
var log1,log2,log3,log4;
var bg

function preload(){
bg= loadImage("bg.png")

}
function setup(){
    angleMode(RADIANS)
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
log1= new Log(width-450,height-40,420,PI/2)
log2= new Log(width-450,height-120,420,PI/2)
log3= new Log(width-500,height-350,200,PI/4)
log4= new Log(width-460,height-350,200,-PI/4)
    box1 = new Box(width-300,height-35,100,100);
    box2= new Box(width-600,height-35,100,100);
    box3 = new Box(width-300,height-100,100,100);
    box4= new Box(width-600,height-100,100,100);
    bird= new Bird(100,300)
    pig1= new Pig(width-460,height-30);
    pig2= new Pig(width-460,height-100)
    box5= new Box(width-460,height-140,100,100)
    ground= new Ground(width/2,height,width,30)
}

function draw(){
    background(bg);
    Engine.update(engine);
    box1.show();
    box2.show();
    box3.show()
    box4.show()
   box5.show()
    ground.show();
    bird.show();
    pig1.show();
    pig2.show()
   log1.show()
   log2.show()
  log3.show()
   log4.show()
}