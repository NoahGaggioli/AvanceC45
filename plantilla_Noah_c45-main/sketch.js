var bg, backgroundIMG;
var balloon, balloonIMG;

function preload(){
    backgroundIMG = loadImage("./assets/dia1.png");
    balloonIMG = loadAnimation("./assets/balloon1.png", "./assets/balloon2.png", "./assets/balloon3.png");
}

function setup(){
    createCanvas(1000,925);

    bg = createSprite(1000, 250, 100,20);
    bg.addImage(backgroundIMG);
    bg.scale = 0.4
    bg.velocityX = -3;

    balloon = createSprite(100, 350);
    balloon.addAnimation("baloonAnimation", balloonIMG);
    balloon.scale = 0.6;

}

function draw(){
    background("black");

    if(bg.x < -600){
        bg.x = 1600;
    }

    if(keyDown("space")){
        balloon.velocityY = -6;
    }

    balloon.velocityY +=2;


    drawSprites();
}