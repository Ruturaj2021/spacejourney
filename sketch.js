var space,spaceimage
var spaceship,spaceshipimage

var coinscore=0
var PLAY=1
var END=0
var gameState=1
var obstaclegroup
var coin,coinimage
var gameover


function preload(){
 spaceshipimage=loadImage("o.png") 
 spaceimage=loadImage("barren.jpg")
 obstacleimage=loadImage("rutu1.png") 
 coinimage=loadImage("coin-2.png")
 gameoverimage=loadImage("download (1).png")
}
  
  
  function setup(){
    createCanvas(windowWidth,windowHeight);
    
    
    space=createSprite(width/2,200)
    space.addImage(spaceimage)
    space.scale=1.5
    space.velocityY=4
    
    
    spaceship=createSprite(width/2,height-20,20,20)
    spaceship.addImage("spaceship",spaceshipimage)
    spaceship.scale=0.2 
    
    obstaclegroup=new Group()
    coingroup=new Group()
  
    gameover = createSprite(650,150);
    gameover.addImage(gameoverimage);
    gameover.scale = 0.8;
    gameover.visible = false;  
  
  
  
  }
  
  function draw(){
    
    
    
  if(gameState===PLAY)  {
    
    
  background(0)
  
  spaceship.x=World.mouseX;
  edges= createEdgeSprites();
  spaceship.collide(edges);
   
  createobstacles()  
  createcoin()
  
  
    space.velocityY=2
    if(space.y > height){
    space.y=height/2
    }
  
    if(coingroup.isTouching(spaceship)){
    coingroup.destroyEach()
    coinscore=coinscore+50
  

  
  
  }
  
  else{
    if(obstaclegroup.isTouching(spaceship)) {
      gameState=END;
      
      gameover.visible=true
      
      
      spaceship.x=width/2;
      spaceship.y=height/2;
      spaceship.scale=0.6;
      
      obstaclegroup.destroyEach();
      coingroup.destroyEach();
      
      
      coingroup.setVelocityYEach(0);
      obstaclegroup.setVelocityYEach(0);
   
      
  
    }
}
  
  
  
  
  
  
  
   
   drawSprites()
   textSize(20);
   fill(255);
   text("coin:"+ coinscore,width-150,30);

  }
   
   
   
  
  }
  




  
  function createobstacles(){
    if (World.frameCount % 120 == 0) {
      var obstacle = createSprite(Math.round(random(50, width-50),40, 10, 10));
      obstacle.addImage(obstacleimage);
      obstacle.scale=0.3;
      obstacle.velocityY = 5;
      obstacle.lifetime = 200;
      obstaclegroup.add(obstacle)
    }
  }

  
  function createcoin(){
    if (World.frameCount % 220 == 0) {
      var coin = createSprite(Math.round(random(50, width-50),40, 10, 10));
      coin.addImage(coinimage);
      coin.scale=0.1;
      coin.velocityY = 5;
      coin.lifetime = 150;
      coingroup.add(coin)
    }
  }









