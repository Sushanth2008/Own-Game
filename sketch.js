const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var backgroundImg;
var fish;
var gun;
var gameState='stage2';
var rand1;
var rand2;
var puzzle1Input;
var puzzle1InputVal
var puzzle1Button;

function preload() {
    backgroundImg=loadImage("Images/background.jpg")
    fishImg=loadImage("Images/fishImage.png")
}

function setup(){
    createCanvas(displayWidth,displayHeight-145);
    engine = Engine.create();
    world = engine.world; 

    fish=createSprite(displayWidth/2-600,displayHeight/2+190)
    fish.addAnimation("fish",fishImg)
    fish.scale=0.3

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

    area1BorderA=createSprite(displayWidth/2+605,displayHeight/2+100,160,15);
    area1BorderA.shapeColor="red" 
     
    area1BorderB=createSprite(displayWidth/2-150,displayHeight/2+100,1200,15);
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

    area1GateClosed=createSprite(displayWidth/2+500,displayHeight/2+100,150,15)
    area1GateClosed.shapeColor="red"
    area1GateClosed.visible=false

    puzzleScreen1=createSprite(displayWidth/2,displayHeight/2,1500,1000)
    puzzleScreen1.shapeColor="green"
    puzzleScreen1.visible=false

    puzzle1Input=createInput("");
    puzzle1Input.style('font-size:30px')

    puzzle1InputVal=puzzle1Input.value();

    puzzle1Button=createButton("Submit")
    puzzle1Button.style('font-size:50px')

   /* gun=createSprite(displayWidth/2+660,displayHeight/2+175,50,15)
    gun.shapeColor="black"*/

}

function draw(){

    background(backgroundImg)

    console.log(puzzle1InputVal);    

    if(gameState=='stage1'||gameState=='stage2'||gameState=='stage3'){

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
       
}

    /*if(fish.x>623 && fish.y>=518.95){
        gun.velocityY=-2
    }

    if(fish.x<623){
        gun.velocityY=0
    }*/

    if(gameState=='stage1' && fish.isTouching(area1Gate)){
        gameState='puzzle1'
    }

    puzzleScreen1.display();

    if(gameState=='puzzle1'){
       // 
        textSize(100);
        fill("black");
        text(rand1 + "+" + rand2 + "=",displayWidth/2-500,displayHeight/2-100)    
        puzzleScreen1.visible=true; 
        puzzle1Input.position(displayWidth/2+displayWidth/6,displayHeight/2-displayHeight/5.1)
        puzzle1Button.position(displayWidth/2+displayWidth/3,displayHeight/2)

    }

    if(gameState=='puzzle1'||gameState=='puzzle2'||gameState=='puzzle3'){
       area1obA.destroy();
       area1obB.destroy();
       area1obC.destroy();
       area1obD.destroy();
       area1Gate.destroy();
       area1BorderA.visible=false;
       area1BorderB.visible=false;
       fish.visible=false;
    }

    if(gameState=='puzzle1' && puzzle1InputVal==rand1+rand2 && mousePressedOver(puzzle1Button)){
        gameState='stage2'
    }

    if(gameState=='stage2'||gameState=='stage3'){
       area1GateClosed.visible=true
       textSize(100);
       fill("black")
       text("Finished",displayWidth/2-200,displayHeight/2+210)
       puzzle1Button.visible=false;
       area1obA.destroy();
       area1obB.destroy();
       area1obC.destroy();
       area1obD.destroy();
    }

    if(gameState=='stage2'){
       fish.y=displayHeight/2+50
       fish.x=displayWidth/2-600
    }

    fish.display();
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
    
    //gun.display();
  

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
    
}
