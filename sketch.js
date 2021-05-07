var tom,tomImage;
var jerry,jerryImage;
var jerry2Image;
var image1;
var image2;
var Background;



function preload() {
tomImage=loadAnimation('images/tomOne.png');
jerryImage=loadAnimation('images/jerryOne.png');
jerry2Image=loadAnimation('images/jerryTwo.png','images/jerryThree.png');
jerry3Image=loadAnimation('images/jerryFour.png');


image1=loadAnimation('images/tomTwo.png','images/tomThree.png');
image2=loadAnimation('images/tomFour.png');
Background=loadImage('images/garden.png')

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(800,550,20,20);
tom.addAnimation('sleeping',tomImage);
tom.scale = 0.2;

jerry=createSprite(100,550,20,20);
jerry.addAnimation('jerryStanding',jerryImage);
jerry.scale=0.2;
}

function draw() {

    background(Background);
    
    if(tom.x-jerry.x<tom.width/2-jerry.width/2){
        tom.velocityX=0;
        tom.addAnimation('at jerry',image2);
        tom.changeAnimation('at jerry',image2);
        tom.x=300

        jerry.addAnimation('quite',jerry3Image);
        jerry.changeAnimation('quite',jerry3Image);


    }

    drawSprites();
}


function keyPressed (){
    if(keyCode === LEFT_ARROW){
        tom.velocityX=-5;
    tom.addAnimation('running',image1);
    tom.changeAnimation('running',image1);

    jerry.addAnimation('teasing',jerry2Image);
    jerry.changeAnimation('teasing',jerry2Image)
}
}