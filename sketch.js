var canvas;
var music;
var pinkbox;
var bluebox;
var redbox;
var yellowbox;
var ball;
var edge1;
var edge2;
var edge3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

;


edges();

 pinkbox=createSprite(95,600,175,30);
 pinkbox.shapeColor="pink";

 bluebox=createSprite(300,600,175,30);
 bluebox.shapeColor="blue";

 redbox=createSprite(495,600,175,30);
 redbox.shapeColor="red";

yellowbox=createSprite(690,600,175,30);
yellowbox.shapeColor="yellow";

ball=createSprite(random(10,750),300,25,25);
ball.velocityY=4;
ball.velocityX=4;


}

function draw() {
    background("white");    
   createEdgeSprites();


   







ball.bounceOff(edge1);
ball.bounceOff(edge2);
ball.bounceOff(edge3);



    //add condition to check if box touching surface and make it box


    if(ball.isTouching(pinkbox)&&ball.bounceOff(pinkbox)){
       ball.shapeColor="pink";
      
    }
    
    if(ball.isTouching(bluebox)&&ball.bounceOff(bluebox)
    ){
        ball.shapeColor="blue";
       
     }
     
    if(yellowbox.isTouching(ball)&&ball.bounceOff(yellowbox)){
        ball.shapeColor="yellow";
        
     }
     
     if(redbox.isTouching(ball)&&ball.bounceOff(redbox)){
         ball.shapeColor="red";
        
     }



    drawSprites();
}




