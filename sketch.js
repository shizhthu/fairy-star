var starImg,fairyImg,bgImg;
var star, starBody;
var fairy,fairyvoice;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	fairyImg = loadAnimation("images/fairyImage1","images/fairyImage2")
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    
	fairyvoice = loadSound("sound/JoyMusic.mp3");
	}

function setup() {
	createCanvas(800, 750);

	fairyvoice.play();

	fairy = createSprite(300,490);
	fairy.addAnimation("fairyFlying",fairyImg);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {

  background(bgImg);

  Engine.update(engine);

  fairy.velocityX = 0;
  fairy.velocityY = 0;
 
  

if(star.y>470){
	star.velocityY = 0;
}


  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  keyPressed();
  
  drawSprites();


}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	
	if(keyDown(RIGHT_ARROW)){
		fairy.velocityX = 6;
	}
	else 
	if(keyDown(LEFT_ARROW)){
	  fairy.velocityX = -6;
	} 
}
