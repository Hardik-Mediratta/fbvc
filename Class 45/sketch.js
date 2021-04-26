var basket,basketImg;
var egg,eggImage;
var backgroundImg;
var log,logImg;
var hen,henImg;
var gameState = PLAY
var PLAY = 1
var WAIT = 0
var END = 2
var ground;
function preload(){                    
eggImage = loadImage("egg.png");

backgroundImg = loadImage("bg.png")
basketImg = loadImage("basket.png")
logImg = loadImage("log.png")
henImg = loadImage("hen.png")

}
function setup(){
createCanvas(windowWidth,windowHeight);
basket = createSprite(668,558,50,50)
basket.addImage(basketImg)
basket.scale = 0.5

ground = createSprite(668,600,windowWidth,10)





log = createSprite(100,284,200,15)
log.addImage(logImg)

log = createSprite(300,284,200,15)
log.addImage(logImg)

log = createSprite(500,284,200,15)
log.addImage(logImg)

log = createSprite(700,284,200,15)
log.addImage(logImg)

log = createSprite(900,284,200,15)
log.addImage(logImg)

log = createSprite(1100,284,200,15)
log.addImage(logImg)
log = createSprite(1300,284,200,15)
log.addImage(logImg)

/*hen = createSprite(100,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(300,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(500,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(700,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(900,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(1100,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(1300,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

egg = createSprite(100,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0

egg = createSprite(300,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0



egg = createSprite(700,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0

egg = createSprite(900,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0

egg = createSprite(1100,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0

egg = createSprite(1300,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0*/

console.log(windowWidth,windowHeight)
}
function draw(){
background(backgroundImg);
text(mouseX+","+mouseY,mouseX,mouseY);
if (gameState === PLAY){
    if(keyDown("RIGHT_ARROW")){
        basket.x+= 5
        basket.y+= 0
    }
    if(keyDown("LEFT_ARROW")){
        basket.x+= -4
        basket.y+= 0
        }
        
        spawnEgg();
        spawnHen();
}



if(gameState === END){
    egg.velocityY = 0
    hen.velocityX = 0
}

    drawSprites()
}
function spawnEgg(){ if(frameCount%100 === 0)
    { egg = createSprite(1300,325,50,50)
         egg.addImage(eggImage)
          egg.scale = 0.1
           egg.velocityY = 5
            egg.velocityX = 0 
           egg.x=Math.round(random(20,1300)) 
            egg.y = windowHeight/2 + 25
             console.log(egg.y); } 
             egg.lifetime = 260

    }
    
    function spawnHen(){
         if(frameCount%50 === 0)
        { hen = createSprite(1300,200,200,15)
             hen.addImage(henImg)
             hen.scale = 0.36
             hen.velocityY = 0
             hen.velocityX = -7
             hen.lifetime = 185
               // hen.x=Math.round(random(100,750)) 
              // hen.y = windowHeight/2 + 25
                // console.log(hen.y); } 
    
        }
        
    }