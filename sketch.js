var creature1,creature2,creature3,creature4,creatureGroup,creature;
var Man,ManAnimation;
var ground;
var bgImg,bg;
var score;
var natureS,nature;

function preload() {
    creature1 = loadImage("Images/creature1.png");
    creature2 = loadImage("Images/creature2.png");
    creature3 = loadImage("Images/creature3.png");
    creature4 = loadImage("Images/creature4.png");

    bgImg = loadImage("Images/bg.png");

    natureS = loadSound("nature.mp3")

    ManAnimation = loadAnimation("Images/Man1.png","Images/Man6.png","Images/Man7.png","Images/Man8.png","Images/Man9.png","Images/Man10.png","Images/Man11.png","Images/Man12.png","Images/Man13.png","Images/Man14.png");
}
function setup(){
    createCanvas(800,600);

    bg = createSprite(400,70,1200,600)
    bg.addImage("bg",bgImg);
    bg.scale = 1 ;
    bg.velocityX = -5;

    Man = createSprite(100,500,20,20);
    Man.addAnimation("Man",ManAnimation);
    Man.scale = 0.5;
    
    ground = createSprite(400,580,1200,10);
    ground.velocityX = -5;
    ground.visible = false;

}
function draw(){
    background("lightblue");
    natureS.play();
    score = frameCount;

    if(bg.x < 0){
       bg.x = bg.width/2;
    }
    if(ground.x < 0){
        ground.x = ground.width/2;
     }

    if(keyDown("space")){
        Man.velocityY = -10;
    }
    Man.velocityY += 0.8
    Man.collide(ground); 

    if (score % 500 === 0){
        ground.velocityX = -10;
        bg.velocityX = -10
        creature.velocityX = -8;
    }
    
    spawnCreature();
    drawSprites();
    textSize(20);
    fill("red");
    text("score "+ score,40,40);
}
function spawnCreature(){
    if(frameCount % 140 === 0){
        creature = createSprite(780,490,20,20);
        creature.velocityX = -4;
        creature.scale = 0.3

        var num = Math.round(random(1,4));
        switch(num){
            case 1 : creature.addImage("creature1",creature1);
            break;
            case 2 : creature.addImage("creature2",creature2);
            break;
            case 3 : creature.addImage("creature3",creature3);
            break;
            case 4 : creature.addImage("creature4",creature4);
            break;
            default : break;
        }
    }

}