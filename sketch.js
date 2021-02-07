var canvas;
var block1,block2,block3,block4;
var ball1, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb(0,0,255);
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(255,128,0);
    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(153,0,76);
    block4 = createSprite(740,580,220,30);
    block4.shapeColor = rgb(0,100,0);
    ball1
 = createSprite(random(20,750),100, 40,40);
    ball1
.shapeColor = rgb(255,255,255);
    ball1
.velocityX = 4;
    ball1
.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball1
.bounceOff(edges);

    if(block1.isTouching(ball1
    ) && ball1
.bounceOff(block1)){
        ball1
    .shapeColor = rgb(0,0,255);
        music.play();
    }

    if(block2.isTouching(ball1
    )){
        ball1
    .shapeColor = rgb(255,128,0);
        ball1
    .velocityX = 0;
        ball1
    .velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball1
    ) && ball1
.bounceOff(block3)){
        ball1
    .shapeColor = rgb(153,0,76);
    }

    if(block4.isTouching(ball1
    ) && ball1
.bounceOff(block4)){
        ball1
    .shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
