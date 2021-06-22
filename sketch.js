
var bgImg;
var cat;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catimg1 = loadImage("cat1.png");
    mouseimg1 = loadImage("mouse4.png");
    catimg2 = loadAnimation("cat2.png,cat3.png");
    mouseimg2 = loadAnimation("mouse2.png,mouse3.png");
    happymouse = loadImage("mouse1.png")
    sittingcat = loadImage("cat4.png")

    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(10,10,10,10);
    cat.addImage("stillcat",catimg1);
    
    mouse = createSprite(10,10,10,10);
    mouse.addImage("mouse",mouseimg1);


}

function draw() {
createCanvas(600,600)
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.changeAnimation("happymouse",happymouse);
        cat.changeAnimation("sittingcat",sittingcat);
        cat.velocityX = 0;
    } else {
        keyPressed();
    }



    bg.display();
    cat.display();
    mouse.display();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      cat.addAnimation("catrunning",catimg2);
      cat.changeAnimation("catrunning");
      mouse.frameDelay = 25;
      cat.velocityX = 5;
  }

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    cat.addAnimation("catrunning",catimg2);
    cat.changeAnimation("catrunning");
    mouse.frameDelay = 25 ;
    cat.velocityX = -5;
  }
  

}
