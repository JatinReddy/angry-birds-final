
//restitution - bounciness
//namespacing
// making constants for Engine, World, Bodies
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
// making the var 
var world, engine;
var ground;
var box1;
var bgImage;
var sling1,sling2;
var gameState = "onSling";
var backgroundIMG;
var score = 0;


//Types of data
    //number
    var num = 12
    console.log(num)

    //string
    var string = "Hello World" // concatenation '+' 
    console.log(string)

    //boolean
    var bool = true
    console.log(bool)

    //undefined
    var object;
    console.log(object)

    //null
    object = null
    console.log(object)

    //array  - data structure
    var arr1 = [1,2,3,4,5]

    var arr2 = [13,"Jatin",null,false]
    console.log(arr2)
    console.log(arr2[1])
    console.log(arr2.length)

    var arr3 = [[1,2],[2,3],[3,4]]
    console.log(arr3[0])
    console.log(arr3[0][0])
    console.log (arr3[1][1])

    arr3.push("Pushing")
    console.log(arr3)

    arr3.pop()
    console.log(arr3)

  // JSON - JavaScript Object Notation


  //API - Application Programming Interface


function preload(){
  getBackgroundIMG();

  sling1 = loadImage("sprites/sling1.png");
  sling2 = loadImage("sprites/sling2.png");
}

function setup() {
  createCanvas(1200,400);
  // creating the engine
  engine = Engine.create();
  // engine belongs to world constant
  world = engine.world
  // using the isStatic option 
  
  // PI radians = 180 degrees
  
  ground = new Ground(600,390,1200,10);
  platform = new Ground(150,310,300,160);
  box1 = new Box(600,350,60,60);
  box2 = new Box(800,350,60,60);
  box3 = new Box(600,270,60,60);
  box4 = new Box(800,270,60,60);
  box5 = new Box(700,190,60,60);
  log1 = new Log(700,310,290,PI/2);
  log2 = new Log(700,230,290,PI/2);
  log3 = new Log(650,150,150,PI/6);
  log4 = new Log(750,150,150,-PI/6);
  bird = new Bird(186,63);
  sling = new Slingshot(bird.body,{x: 186,y:63})
  pig1 = new Pig(700,350);
  pig2 = new Pig(700,270);


}









function draw() {

  if(backgroundIMG){
    background(backgroundIMG);
  }
  else{
    background("lightblue")
  }

  text("score = " + score,1005,52);
  // updating the engine
  Engine.update(engine);
  rectMode(CENTER);
  // displaying the ground
  
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  pig2.display();
  box4.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  platform.display();
  image(sling1,180,35);
  bird.display();
  sling.display();
  image(sling2,150,30);

  pig1.score();
  pig2.score();
  

  text(mouseX +","+ mouseY,mouseX,mouseY);

  
  
}

function mouseDragged(){
  if(gameState === "onSling"){
  Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
  }
}

function mouseReleased(){
  sling.fly()
  gameState = "launched";
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(bird.body,{x:186,y:63});
    Matter.Body.setAngularVelocity(bird.body,0);
    Matter.Body.setAngle(bird.body,0);
    sling.attach(bird.body);
    bird.trajectory = [];

  }
}
//asynchronous
async function getBackgroundIMG(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  console.log(responseJSON)
  var datetime = responseJSON.datetime
  console.log(datetime)
  var hour = datetime.slice(11,13);
  console.log(hour);

  if (hour>=6 && hour<18){
    bg = "sprites/bg.png";
  }
  else {
    bg = "sprites/bg2.jpg";
  }
  backgroundIMG = loadImage(bg)
}