var canvas, box, box2, edges;
var music;
var block1, block2, block3, block4, block5, block6, block7, block8;

function preload(){
    music = loadSound("music.mp3");
    c = loadSound("c.aac");
    d = loadSound("d.aac");
    e = loadSound("e.aac");
    f = loadSound("f.aac");
    g = loadSound("g.aac");
    a = loadSound("a.aac");
    b = loadSound("b.aac");
    c2 = loadSound("c2.aac");
}

function setup(){
    canvas = createCanvas(800,600);

block1 = createSprite(50 ,300, 90, 20);
block1.shapeColor = "turquoise";

block2 = createSprite(150, 300, 90, 20);
block2.shapeColor = "blue";

block3 = createSprite(250, 300, 90, 20);
block3.shapeColor = "purple";

block4 = createSprite(350, 300, 90, 20);
block4.shapeColor = "red";

block5 = createSprite(450, 300, 90, 20);
block5.shapeColor = "orange";

block6 = createSprite(550, 300, 90, 20);
block6.shapeColor = "yellow";

block7 = createSprite(650, 300, 90, 20);
block7.shapeColor = "lightgreen";

block8 = createSprite(750, 300, 90, 20);
block8.shapeColor = "green";

    //create box sprite and give velocity
box = createSprite(300, 300, 20, 20);//(random(20, 750))
box.shapeColor = "white";
box.velocityY = 6;

box2 = createSprite(30, 0, 20, 20);
box2.shapeColor = "white";
box2.velocityY = 6;
}

function draw() {
    background(0);

    edges = createEdgeSprites();
    box.bounceOff(edges);
    box2.bounceOff(edges);

    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor = "turquoise";
        c.play();
    }
    if(block1.isTouching(box2) && box2.bounceOff(block1)){
        box2.shapeColor = "turquoise";
        c.play(); 
    }
    if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColor = "blue";
        d.play();
    }
    if(block2.isTouching(box2) && box2.bounceOff(block2)){
        box2.shapeColor = "blue";
        d.play();
    }
    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor = "purple";
        e.play();
    }
    if(block3.isTouching(box2) && box2.bounceOff(block3)){
        box2.shapeColor = "purple";
        e.play();
    }
    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor = "red";
        f.play();
    }
    if(block4.isTouching(box2) && box2.bounceOff(block4)){
        box2.shapeColor = "red";
        f.play();
    }
    if(block5.isTouching(box) && box.bounceOff(block5)){
        box.shapeColor = "orange";
        g.play();
    }
    if(block5.isTouching(box2) && box2.bounceOff(block5)){
        box2.shapeColor = "orange";
        g.play();
    }
    if(block6.isTouching(box) && box.bounceOff(block6)){
        box.shapeColor = "yellow";
        a.play();
    }
    if(block6.isTouching(box2) && box2.bounceOff(block6)){
        box2.shapeColor = "yellow";
        a.play();
    }
    if(block7.isTouching(box) && box.bounceOff(block7)){
        box.shapeColor = "lightgreen";
        b.play();
    }
    if(block7.isTouching(box2) && box2.bounceOff(block7)){
        box2.shapeColor = "lightgreen";
        b.play();
    }
    if(block8.isTouching(box) && box.bounceOff(block8)){
        box.shapeColor = "green";
        c2.play();
    }
    if(block8.isTouching(box2) && box2.bounceOff(block8)){
        box2.shapeColor = "green";
        c2.play();
    }

    if(keyDown("LEFT_ARROW")){
        box.x -= 5;
    }
    if(keyDown("RIGHT_ARROW")){
        box.x += 5;
    }
    if(keyDown("A")){
        box2.x -= 5;
    }
    if(keyDown("D")){
        box2.x += 5;
    }
drawSprites();
}