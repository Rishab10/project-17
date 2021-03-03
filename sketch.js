var blueB,redB,greenB,pinkB,bow,arrow,background;
var blueBImg,redBImg,greenBImg,pinkBimg,bowImg,arrowImg;
var backgroundImg,score;



function preload(){
 //load your images here 
 blueBImg = loadImage("blue_balloon0.png");
 redBImg = loadImage("red_balloon0.png");
 pinkBImg = loadImage("pink_balloon0.png");
 greenBImg = loadImage("green_balloon0.png");
bowImg = loadImage("bow0.png");
arrowImg = loadImage("arrow0.png");
  backgroundImg = loadImage("background0.png");
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImg);
  background.scale = 2.5;
  
  bow = createSprite(480,220,20,50);
  
bow.addImage(bowImg);
  score = 0;
  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
  
  
}

function draw() {
background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
 if (keyDown("space")) {
     createArrow();

  }
  
  //moving bow
  bow.y = World.mouseY
  //add code here
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
   if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
  
  drawSprites();
  text("score:"+score,500,50);
}
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redBImg);
  red.velocityX = 3;
  red.scale = 0.1;
  red.lifetime = 150;
redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueBImg);
  blue.velocityX = 3;
  blue.scale = 0.1
  blue.lifetime = 150;
 blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenBImg);
  green.velocityX = 3;
  green.scale = 0.1;
  blue.lifetime = 150;
greenB.add(green);
  }
function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkBImg);
  pink.velocityX = 3;
  pink.scale = 1;
  pink.lifetime = 150;
pinkB.add(pink);         
}

function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.addImage(arrowImg)
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.y = bow.y;
  arrow.lifetime = 100;
  return arrow;
}
