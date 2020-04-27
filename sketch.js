const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var world,engine;
var opp1,opp2,box11
var platform,platform2,platform3,platform4,platform5
var ball
var chain

function setup(){
createCanvas(800,600)
engine = Engine.create();
world = engine.world;

opp1=new Opponent(500,530,30,30);
opp2=new Opponent(600,420,30,30);

platform=new Platform(600,550,400,10);
platform2=new Platform(100,615,200,100);
platform3=new Platform(600,315,200,10);
platform4=new Platform(700,370,10,100);
platform5=new Platform(600,424,200,10);

ball=new Ball(85,400,50,50);

chain=new Slingshot(ball.body,{x:80,y:400})

}
function draw(){
  Engine.update(engine);
  background("grey");
  platform.display();
  platform2.display();
  platform3.display();
  platform4.display();
  platform5.display();

  opp1.display();
  opp2.display();
  chain.display();

  ball.display();  
}
  function mouseReleased() {
    chain.fly();
}
function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function keyPressed(){
  if(keyCode===32){
    chain.attach(ball.body);
  }
}

