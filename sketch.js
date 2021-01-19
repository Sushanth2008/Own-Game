const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var backgroundImg;
var fish;
var gun;
var gameState='stage3';
var rand1;
var rand2;
var puzzle1Input;
var puzzle1InputVal
var puzzle1Button;
var bullet;

function preload() {
    backgroundImg=loadImage("Images/background.jpg")
    fishImg=loadImage("Images/fishImage.png")
    fishImg2=loadImage("Images/fishImage2.png")
    gunImg=loadImage("Images/gunImage.png")
}

function setup(){
    createCanvas(displayWidth,displayHeight-145);
    engine = Engine.create();
    world = engine.world; 

    bulletGroup=createGroup();

    fish=createSprite(displayWidth/2-600,displayHeight/2+190)
    fish.addAnimation("fish",fishImg)
    fish.scale=0.3

    fish2=createSprite(displayWidth/2-600,displayHeight/2)
    fish2.addAnimation("fish",fishImg2)
    fish2.visible=false;
    fish2.scale=0.15

    inviBorder1=createSprite(displayWidth/2-680,displayHeight/2,5,1000);
    inviBorder1.visible=false;
    inviBorder2=createSprite(displayWidth/2+663,displayHeight/2,5,1000);
    inviBorder2.visible=false;
    
    inviBorder3=createSprite(displayWidth/2,displayHeight/2-383,2000,5);
    inviBorder3.visible=false;
    inviBorder4=createSprite(displayWidth/2,displayHeight/2+237,2000,5);
    inviBorder4.visible=false;

    rand1=Math.round(random(2000,20000));
    rand2=Math.round(random(2000,20000));

    area1BorderA=createSprite(displayWidth/2-150,displayHeight/2+100,1200,15);
    area1BorderA.shapeColor="red" 
     
    area1BorderB=createSprite(displayWidth/2+605,displayHeight/2+100,160,15);
    area1BorderB.shapeColor="red"  

    area1Gate=createSprite(displayWidth/2+487.5,displayHeight/2+100,75,10)
    area1Gate.shapeColor="yellow"

    area1obA=createSprite(displayWidth/2-100,displayHeight/2+210,10,70)
    area1obA.shapeColor="blue"

    area1obB=createSprite(displayWidth/2-350,displayHeight/2+142,10,70)
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

    area2Gate=createSprite(displayWidth/2+387.5,displayHeight/2-150,75,10)
    area2Gate.shapeColor="yellow"
    area2Gate.visible=false;

    area2gateClosed=createSprite(displayWidth/2+387.5,displayHeight/2-150,75,15);
    area2gateClosed.shapeColor="red"

    area2cover=createSprite(displayWidth/2,displayHeight/2-30,1400,250);
    area2cover.shapeColor="black"
    area2cover.visible=false;

    puzzleScreen1=createSprite(displayWidth/2,displayHeight/2,1500,1000)
    puzzleScreen1.shapeColor="green"
    puzzleScreen1.visible=false

   

    gun=createSprite(displayWidth/2+600,displayHeight/2-20,50,15)
    gun.addAnimation("gun",gunImg)
    gun.scale=0.5
    gun.visible=false;
    gun.velocityY=4    

}

function draw(){

    background(backgroundImg)

    console.log(puzzle1InputVal);    

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
            gameState='puzzle1'
            area1Gate.destroy();
        }

        area2cover.visible=true;
       
}    

    puzzleScreen1.display();
    area1cover.display();   
    area2cover.display(); 

    if(gameState=='puzzle1'){
        textSize(100);
        fill("black");
        text(rand1 + "+" + rand2 + "=",displayWidth/2-500,displayHeight/2-100)    
        puzzleScreen1.visible=true; 
        puzzle1Input=createInput("hi");
        puzzle1Input.style('font-size:30px')
    
        puzzle1Button=createButton("Submit")
        puzzle1Button.style('font-size:50px')
        puzzle1Input.position(displayWidth/2+displayWidth/6,displayHeight/2-displayHeight/5.1)
        puzzle1Button.position(displayWidth/2+displayWidth/3,displayHeight/2)
        puzzle1InputVal=puzzle1Input.value();

        if(puzzle1InputVal==rand1+rand2 ){
            puzzle1Button.mousePressedOver(()=>{
                gameState='stage2';
            })
    }        
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

       fish.y=displayHeight/2+50
       fish.x=displayWidth/2-600

       

       area1GateClosed.visible=true
       area1cover.visible=true;
       area2cover.visible=false;
       textSize(100);
       fill("white")
       text("Finished",displayWidth/2-200,displayHeight/2+210)       
       
       area1obA.destroy();
       area1obB.destroy();
       area1obC.destroy();
       area1obD.destroy();

       area1GateClosed.visible=true
       
       area1BorderA.visible=true;
       area1BorderB.visible=true;
       area1obA.destroy();
       area1obB.destroy();
       area1obC.destroy();
       area1obD.destroy();
       fish.destroy();

       area2BorderA.visible=true
       area2BorderB.visible=true
       area2Gate.visible=true
       gun.visible=true;       
       fish2.visible=true;

       if(fish2.isTouching(area2Gate)){
           gameState='stage3'
       }

    //if(fish.x>623 && fish.y>=518.95){
        
    //}

    /*if(fish.x<423){
        gun.velocityY=0
    }*/
      
    }

    if(gameState=='stage3'){

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
    
           area1GateClosed.visible=true

           textSize(100);
           fill("white")
           text("Finished",displayWidth/2-200,displayHeight/2+210)
           
           area2BorderA.visible=true;
           area2BorderB.visible=true;
           area1obA.destroy();
           area1obB.destroy();
           area1obC.destroy();
           area1obD.destroy();

           area2cover.visible=true;
           area1cover.visible=true;

           gun.destroy();
           fish.destroy();
           fish2.destroy();
           area2Gate.destroy();
           area2gateClosed.display()

       textSize(100);
       fill("white")
       text("Finished",displayWidth/2-200,displayHeight/2)
           
       
    }

    if(gameState=='puzzle1'||gameState=='puzzle2'||gameState=='puzzle3'){
        area1obA.destroy();
        area1obB.destroy();
        area1obC.destroy();
        area1obD.destroy();
        area1BorderA.visible=false;
        area1BorderB.visible=false;
        area2BorderA.visible=false;
        area2BorderB.visible=false;
        area2Gate.destroy();
        gun.destroy();
        fish.visible=false;
     } 
     
     if(gun.isTouching(area2BorderB)){
        gun.velocityY=4;
    }

    if(gun.isTouching(area1BorderB)){
        gun.velocityY=-4;
    }   

    fish.display();
    fish2.display()
    inviBorder1.display();
    inviBorder2.display();
    inviBorder3.display();
    inviBorder4.display();

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
    gun.display(); 

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
    fish2.collide(area1BorderA);
    fish2.collide(area1BorderB);
    fish2.collide(area1GateClosed);
    fish2.collide(area2BorderA);
    fish2.collide(area2BorderB);
    fish2.collide(area2Gate);

   // spawnobstacles()
    
}

function spawnobstacles(){
    if(frameCount%100===0)
   bullet=createSprite(displayWidth/2,displayHeight/2,10,10);
   bullet.y=gun.y
   bullet.x=gun.x
   bullet.velocityX-4
   bullet.lifetime=100;
   bulletGroup.add(bullet)
   return bullet;
}
