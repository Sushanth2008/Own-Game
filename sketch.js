var backgroundImg;
var fish;
var gun;
var gameState='stage1'
var bullet;
var life=2;


function preload() {
    backgroundImg=loadImage("Images/background.jpg")
    fishImg=loadImage("Images/fishImage.png")
    fishImg2=loadImage("Images/fishImage2.png")
    fishImg3=loadImage("Images/fishImage3.png")
    gunImg=loadImage("Images/gunImage.png")
    bulletImg=loadImage("Images/bulletImg.png")
    gameOver=loadImage("Images/gameOver.png")
}

function setup(){
    createCanvas(displayWidth,displayHeight-145);

    bulletGroup=createGroup();

    restartButton=createSprite(displayWidth/2+500,displayHeight/2+100,200,50);
    restartButton.shapeColor="red";
    restartButton.visible=false

    playAgainButton=createSprite(displayWidth/2+515,displayHeight/2+100,250,50);
    playAgainButton.shapeColor="cyan";
    playAgainButton.visible=false

    fish=createSprite(displayWidth/2-600,displayHeight/2+190)
    fish.addAnimation("fish",fishImg)
    fish.scale=0.3

    fish2=createSprite(displayWidth/2-600,displayHeight/2)
    fish2.addAnimation("fish",fishImg2)
    fish2.visible=false;
    fish2.scale=0.15

    fish3=createSprite(displayWidth/2-600,displayHeight/2-270)
    fish3.addAnimation("fish",fishImg3)
    fish3.visible=false;
    fish3.scale=0.15


    inviBorder1=createSprite(displayWidth/2-680,displayHeight/2,5,1000);
    inviBorder1.visible=false;
    inviBorder2=createSprite(displayWidth/2+663,displayHeight/2,5,1000);
    inviBorder2.visible=false;
    
    inviBorder3=createSprite(displayWidth/2,displayHeight/2-383,2000,5);
    inviBorder3.visible=false;
    inviBorder4=createSprite(displayWidth/2,displayHeight/2+237,2000,5);
    inviBorder4.visible=false;

    inviBorder5=createSprite(displayWidth/2+535,displayHeight/2-25,5,240);
    inviBorder5.visible=false;

    area1BorderA=createSprite(displayWidth/2-150,displayHeight/2+100,1200,15);
    area1BorderA.shapeColor="red" 
     
    area1BorderB=createSprite(displayWidth/2+605,displayHeight/2+100,160,15);
    area1BorderB.shapeColor="red"  

    area1Gate=createSprite(displayWidth/2+487.5,displayHeight/2+100,75,10)
    area1Gate.shapeColor="yellow"

    area1obA=createSprite(displayWidth/2-350,displayHeight/2+142,10,70)
    area1obA.shapeColor="blue"

    area1obB=createSprite(displayWidth/2-100,displayHeight/2+210,10,70)
    area1obB.shapeColor="blue"    

    area1obC=createSprite(displayWidth/2+100,displayHeight/2+142,10,70)
    area1obC.shapeColor="blue"

    area1obD=createSprite(displayWidth/2+300,displayHeight/2+210,10,70)
    area1obD.shapeColor="blue"

    area1GateClosed=createSprite(displayWidth/2+487,displayHeight/2+100,80,15)
    area1GateClosed.shapeColor="red"
    area1GateClosed.visible=false

    area1cover=createSprite(displayWidth/2,displayHeight/2+175,1400,150);
    area1cover.shapeColor="black"
    area1cover.visible=false;

    area2BorderA=createSprite(displayWidth/2-250,displayHeight/2-150,1200,15);
    area2BorderA.shapeColor="red" 
    area2BorderA.visible=false;
     
    area2BorderB=createSprite(displayWidth/2+555,displayHeight/2-150,260,15);
    area2BorderB.shapeColor="red" 
    area2BorderB.visible=false;

    area2Gate=createSprite(displayWidth/2+387.5,displayHeight/2-149.5,75,10)
    area2Gate.shapeColor="yellow"
    area2Gate.visible=false;

    area2gateClosed=createSprite(displayWidth/2+387.5,displayHeight/2-150,75,15);
    area2gateClosed.shapeColor="red"

    area2cover=createSprite(displayWidth/2,displayHeight/2-30,1400,250);
    area2cover.shapeColor="black"
    area2cover.visible=false;

    area3cover=createSprite(displayWidth/2,displayHeight/2-270,1400,230);
    area3cover.shapeColor="black"
    area3cover.visible=false;

    area3obA1=createSprite(displayWidth/2-300,displayHeight/2-370,150,10);
    area3obA1.velocityY=3.5
    area3obA1.shapeColor="blue"

    area3obA2=createSprite(displayWidth/2-300,displayHeight/2-170,150,10);
    area3obA2.velocityY=-3.5
    area3obA2.shapeColor="blue"

    area3obB1=createSprite(displayWidth/2+50,displayHeight/2-370,150,10);
    area3obB1.velocityY=4
    area3obB1.shapeColor="blue"

    area3obB2=createSprite(displayWidth/2+50,displayHeight/2-170,150,10);
    area3obB2.velocityY=-4
    area3obB2.shapeColor="blue"

    area3obC1=createSprite(displayWidth/2+400,displayHeight/2-370,150,10);
    area3obC1.velocityY=5
    area3obC1.shapeColor="blue"

    area3obC2=createSprite(displayWidth/2+400,displayHeight/2-170,150,10);
    area3obC2.velocityY=-5
    area3obC2.shapeColor="blue"

    gameOverImg=createSprite(displayWidth/2+50,displayHeight/2-200,displayWidth,displayHeight)
    gameOverImg.addAnimation("gameOver",gameOver);
    gameOverImg.visible=false    

    lostcover=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    lostcover.shapeColor="blue"
    lostcover.visible=false

    wincover=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    wincover.shapeColor="blue"
    wincover.visible=false

    puzzleScreen1=createSprite(displayWidth/2,displayHeight/2,1500,1000)
    puzzleScreen1.shapeColor="green"
    puzzleScreen1.visible=false

    area3Gate=createSprite(displayWidth/2+679,displayHeight/2-260,10,70)
    area3Gate.shapeColor="yellow"   

    gun=createSprite(displayWidth/2+600,displayHeight/2,50,15)
    gun.addAnimation("gun",gunImg)
    gun.scale=0.5
    gun.visible=false;

}

function draw(){

   background(backgroundImg)

   console.log(gun.y);  
    
    gun.display(); 
    puzzleScreen1.display(); 
    area2cover.display();

    if(gameState=='stage1'){

        if(keyDown(UP_ARROW)){
            fish.y=fish.y-10
        }
    
        if(keyDown(DOWN_ARROW)){
            fish.y=fish.y+10
        }
    
        if(keyDown(RIGHT_ARROW)){
            fish.x=fish.x+10
        }
    
        if(keyDown(LEFT_ARROW)){
            fish.x=fish.x-10
        }

        if(fish.isTouching(area1Gate)){
            gameState='stage2'
        }

        fish2.visible=false;

        if(fish.isTouching(area1obA)||fish.isTouching(area1obB)||fish.isTouching(area1obC)||fish.isTouching(area1obD)){
            life=life-1
            fish.x=displayWidth/2-600
            fish.y=displayHeight/2+190
        }

        area2cover.visible=true;
        area3cover.visible=true;
      
}    

    if(gameState=='stage2'){

        if(keyDown(UP_ARROW)){
            fish2.y=fish2.y-10
        }
    
        if(keyDown(DOWN_ARROW)){
            fish2.y=fish2.y+10
        }
    
        if(keyDown(RIGHT_ARROW)){
            fish2.x=fish2.x+10
        }
    
        if(keyDown(LEFT_ARROW)){
            fish2.x=fish2.x-10
        }

       area1cover.visible=true;

       fish.x=displayWidth/2-600
       fish.y=displayHeight/2+190 

       area1GateClosed.visible=true
       area2cover.visible=false;
       area3cover.visible=true;

       fish2.visible=true      
       
       area1obA.visible=false
       area1obB.visible=false
       area1obC.visible=false
       area1obD.visible=false

       area1BorderA.visible=true;
       area1BorderB.visible=true;
       area1Gate.visible=false
       area1obA.visible=false
       area1obB.visible=false
       area1obC.visible=false
       area1obD.visible=false
       

       area2BorderA.visible=true
       area2BorderB.visible=true
       area2Gate.visible=true
       area2gateClosed.visible=false
       gun.visible=true;       
       fish2.visible=true;

       if(fish2.isTouching(area2Gate)){
           gameState='stage3'
       }

      if(fish2.isTouching(bulletGroup)){
        life=life-1
        bulletGroup.destroyEach()
        gun.y=displayHeight/2
        fish2.x=displayWidth/2-600
        fish2.y=displayHeight/2
    }

    if((gun.y<=435) && keyDown(DOWN_ARROW)) {     
            gun.y=gun.y+10  
    }

    if(gun.y>=294){
        if(keyDown(UP_ARROW)){
            gun.y=gun.y-10
    }
}

    spawnobstacles()
    
    drawSprites()       
      
    }
    

    if(gameState=='stage3'){

        if(keyDown(UP_ARROW)){
            fish3.y=fish3.y-10
        }
    
        if(keyDown(DOWN_ARROW)){
            fish3.y=fish3.y+10
        }
    
        if(keyDown(RIGHT_ARROW)){
            fish3.x=fish3.x+10
        }
    
        if(keyDown(LEFT_ARROW)){
            fish3.x=fish3.x-10
        }
    
           area1GateClosed.visible=true

           fish3.visible=true;
           fish2.visible=true;

           fish2.x=displayWidth/2-600
           fish2.y=displayHeight/2

           if(fish3.isTouching(area3obA1)||fish3.isTouching(area3obA2)||fish3.isTouching(area3obB1)||fish3.isTouching(area3obB2)||fish3.isTouching(area3obC1)||fish3.isTouching(area3obC2)){
               life=life-1
               fish3.x=displayWidth/2-600
               fish3.y=displayHeight/2-270
           }

           if(fish3.isTouching(area3Gate)){
               gameState='win'
           }
           
           area2BorderA.visible=true;
           area2BorderB.visible=true;


           area3obA1.display()
           area3obA2.display()
           area3obB1.display()
           area3obB2.display()
           area3obC1.display()
           area3obC2.display()

           area2cover.visible=true;
           area1cover.visible=true;
           area3cover.visible=false;

           area2gateClosed.visible=true

           gun.visible=false;
           area2Gate.visible=false;
           area2gateClosed.display()

       textSize(100);
       fill("white")
       text("Finished",displayWidth/2-200,displayHeight/2)
           
       
    }

    if(area3obA2.isTouching(inviBorder3)){
        area3obA2.velocityY=3.5
    }

    if(area3obA2.isTouching(area2BorderA)){
        area3obA2.velocityY=-3.5
    }

    if(area3obA1.isTouching(inviBorder3)){
        area3obA1.velocityY=3.5
    }

    if(area3obA1.isTouching(area2BorderA)){
        area3obA1.velocityY=-3.5
    }



    if(area3obB2.isTouching(inviBorder3)){
        area3obB2.velocityY=4
    }

    if(area3obB2.isTouching(area2BorderA)){
        area3obB2.velocityY=-4
    }

    if(area3obB1.isTouching(inviBorder3)){
        area3obB1.velocityY=4
    }

    if(area3obB1.isTouching(area2BorderA)){
        area3obB1.velocityY=-4
    }



    if(area3obC2.isTouching(inviBorder3)){
        area3obC2.velocityY=5
    }

    if(area3obC2.isTouching(area2BorderA)){
        area3obC2.velocityY=-5
    }

    if(area3obC1.isTouching(inviBorder3)){
        area3obC1.velocityY=5
    }

    if(area3obC1.isTouching(area2BorderA)){
        area3obC1.velocityY=-5
    }

    if(life<=0){
        gameState='lost'
    }     
     
    inviBorder1.display();
    inviBorder2.display();
    inviBorder3.display();
    inviBorder4.display();
    inviBorder5.display();

    area1cover.display();
    area1BorderA.display();
    area1BorderB.display();
    area1Gate.display();
    area1obA.display();
    area1obB.display();
    area1obC.display();
    area1obD.display();
    area1GateClosed.display(); 
    area2BorderA.display();
    area2BorderB.display();
    area2Gate.display();
    area3Gate.display()



    area3cover.display();

    fish.collide(inviBorder1);
    fish.collide(inviBorder2);
    fish.collide(inviBorder3);
    fish.collide(inviBorder4);
    fish.collide(area1BorderA);
    fish.collide(area1BorderB);
    fish.collide(area1Gate);
    fish.collide(area1obA);
    fish.collide(area1obB);
    fish.collide(area1obC);
    fish.collide(area1obD);

    
    fish2.collide(inviBorder1);
    fish2.collide(inviBorder2);
    fish2.collide(inviBorder3);
    fish2.collide(inviBorder4);
    fish2.collide(inviBorder5);
    fish2.collide(area1BorderA);
    fish2.collide(area1BorderB);
    fish2.collide(area1GateClosed);
    fish2.collide(area2BorderA);
    fish2.collide(area2BorderB);
    fish2.collide(area2Gate);
    fish2.collide(gun)

    fish3.collide(area2BorderA);
    fish3.collide(area2BorderB);
    fish3.collide(area2gateClosed);
    fish3.collide(inviBorder1);
    fish3.collide(inviBorder3);
    fish3.collide(inviBorder4);

    fish.display();
    fish2.display();
    fish3.display();

   textSize(20)
   fill("white")
   text("Lives Left:" + life,displayWidth/2+550,displayHeight/2-350)

   if(gameState=='lost'){
   lostcover.visible=true
   lostcover.display()
   gameOverImg.visible=true
   gameOverImg.display()
   textSize(50);
   fill("orange")
   text("You Lost All Your Lives",displayWidth/2-200,displayHeight/2)
   restartButton.visible=true
   restartButton.display() 
   textSize(20)    
   text("Press Me To Restart",displayWidth/2+410,displayHeight/2+106)
   reset()

   }

   if(gameState=='win'){
    wincover.visible=true;
    wincover.display()
    textSize(180)
    fill("cyan")
    text("You Win",displayWidth/2-300,displayHeight/2-100)
    playAgainButton.visible=true
    playAgainButton.display()
    textSize(20)  
    fill("blue")  
    text("Press Me To Play Again",displayWidth/2+410,displayHeight/2+106)

    if(mousePressedOver(playAgainButton)){
      reset()
    }

   }

   if(gameState=='stage2'){
    textSize(100);
    fill("white")
    text("Finished",displayWidth/2-200,displayHeight/2+210)
   }

   if(gameState=='stage3'){
    textSize(100);
    fill("white")
    text("Finished",displayWidth/2-200,displayHeight/2+210)
   }
    
}


function spawnobstacles(){
   if(frameCount%30==0){
   bullet=createSprite(gun.x-80,gun.y-30,10,10);
   bullet.addAnimation("bullet",bulletImg)
   bullet.scale=0.04
   bullet.velocityX=-30
   bullet.lifetime=40;
   bulletGroup.add(bullet)
   return bullet;
   }
 }

 function reset(){
       if(mousePressedOver(restartButton))
       location.reload()
 }

