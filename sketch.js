const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var block17,block18,block19;
var box20,block21,block22;



var ground,ground2,ground3;

var slingshot;

var polygon;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup(){
    createCanvas(1000,500);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(100,450,2000,20);
    ground2 = new Ground(750,175,250,20);
    ground3 = new Ground(450,350,250,20);
    
    block1 = new Block(390,327,25,35);
    block2 = new Block(410,327,25,35);
    block3 = new Block(430,327,25,35);
    block4 = new Block(450,327,25,35);
    block5 = new Block(470,327,25,35);
    block6 = new Block(490,327,25,35);
    block7 = new Block(510,327,25,35);

    block8 = new Block(410,302,25,35);
    block9 = new Block(430,302,25,35);
    block10 = new Block(450,302,25,35);
    block11 = new Block(470,302,25,35);
    block12 = new Block(490,302,25,35);

    block13 = new Block(430,277,25,35);
    block14 = new Block(450,277,25,35);
    block15 = new Block(470,277,25,35);

    block16 = new Block(450,252,25,35);

    block17 = new Block(715,150,35,35);
    block18 = new Block(755,150,35,35);
    block19 = new Block(780,150,35,35);

    block20 = new Block(745,105,35,35);
    block21 = new Block(760,110,40,35);

    block22 = new Block(750,95,35,35);

 // r1 = new Rectangle(150,250,30,30);
   polygon = Bodies.rectangle(50,200,20,20);
   World.add(world,polygon);
    slingshot = new Slingshot(polygon,{x:180,y:290});
    
}

function draw(){

    rectMode(CENTER);
    
    background(56,44,44);

    Engine.update(engine);

    strokeWeight(2);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    block17.display();
    block18.display();
    block19.display();

    block20.display();
    block21.display();

    block22.display();

    ground.display();
    ground2.display();
    ground3.display();
 
  //  r1.display();
  fill("green");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,35,35);

    slingshot.display();
   
  }
  function mouseDragged(){
      Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
    }
    function mouseReleased(){
      slingshot.fly();
    }
    function keyPressed(){
      if(keyCode === 32){
          slingshot.attach(this.polygon);
      }
    }