var pathImg,boyImg;
var path,runner;
var gamestate="play";
var score = 0;
var monsterGroup;
var monster;
var monsterImg;
var gameoverImage;
var gameover;
var coin;
var coinimg;
var coingroup;
var left,right;
function preload(){
  pathImg = loadImage("temple run 2.jpg");
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  monsterImg = loadImage("bomb.png");
  gameoverImage = loadImage("gameover.jpg");
  coinimg = loadImage("coin.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
path = createSprite(width/2,50,width+500,height);
path.scale=3.5
path.addImage(pathImg);

runner = createSprite(500,440,30,30);
runner.addAnimation("runner running",boyImg);
monsterGroup=new Group();
coingroup = new Group();

left = createButton('left');
this.left.position(100,500);
this.left.style('background', 'lightgreen');

right = createButton('right');
this.right.position(1200,500);
this.right.style('background', 'lightgreen');
}

function draw() {
  background("white"); 
  
  path.velocityY = 4;
  if(path.y > 600 ){
    path.y = height/2;
  }
  if(keyDown("space")){
    runner.velocityY=-10; 
   }
   if(keyDown("left_arrow")){
   runner.x=runner.x-11;  
   }
   if(keyDown("right_arrow")){
    runner.x=runner.x+11;  
   }

spawncoin();
   spawnMonster();
  drawSprites();

  if(monsterGroup.isTouching(runner)){
    monsterGroup.destroyEach();  
    gamestate="end";
    }  
    if(coingroup.isTouching(runner)){
      coingroup.destroyEach();  
    score= score +1;
      }  
  
  if(gamestate==="end"){
  textSize(59);
    text("gameover",200,400);
  gameover = createSprite(width/2,400);
  gameover.addImage(gameoverImage);
 }


 this.left.mousePressed(() => {
  runner.x=runner.x-11;  
}); 
this.right.mousePressed(() => {
  runner.x=runner.x+11;  
}); 







stroke("red");
textSize(30);
fill("red")
text("SCORE : "+score,250,90);

textSize(10);
fill("red");
  text("CLICK THE LEFT OR UP RIGHT KEYS TO MOVE THE RUNNER",250,50);
}
function spawnMonster(){
  if(frameCount%30===0){
  monster=createSprite(300,100,20,20); 
  monster.velocityY=6;  
  monster.scale=0.1;
  monster.addImage(monsterImg);
  monster.x=Math.round(random(100,1200));
  monsterGroup.add(monster);
  }  
}
function spawncoin(){
  if(frameCount%30===0){
  coin=createSprite(300,100,20,20); 
  coin.velocityY=6;  

  coin.addImage(coinimg);
  coin.x=Math.round(random(100,1200));
  coingroup.add(coin);
  }  
}