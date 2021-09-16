//whiteangrybird
var spriteimage;
var spritejson;
var bird;
var egg;
var bin=0;
var count=0;
var eggsprite;
var egg_number=[];
//pigs
var pig_sprite;
var pig_json; 
var smallPig=[];
var oldPig=[];
var old_pig_json;

var backgroundImage;
var total=3;
function preload(){
  //bird
  spriteimage=loadImage('assests/angry/angry.png');
  spritejson=loadJSON('assests/angry/white.json');
  //egg
  eggsprite=loadImage("assests/angry/egg.png");
  //small_pig
  pig_sprite=loadImage('assests/pig/small_pig.png');
  pig_json=loadJSON('assests/pig/simple_pig.json');
  old_pig_json=loadJSON('assests/pig/old_pig.json');
  backgroundImage=loadImage('assests/back.jpg');


}
function setup() {
  createCanvas(1364,700);
  bird=new Bird();
  bird.assests();
  for(var i=0;i<total;i++){
      smallPig.push(new Smallpig());
      oldPig.push(new Oldpig());
  }
  for(var i=0;i<total;i++){
    smallPig[i].assests();
    oldPig[i].assests();
  }
}

function draw() {
  backgroundImage.resize(1364,700);
  image(backgroundImage,0,0);
  bird.show();
  for(var i=0;i<egg_number.length;i++){
   
    egg_number[i].show();
  }
  bird.move_hori();
  for(var i=0;i<total;i++){
    smallPig[i].show();
    oldPig[i].show();
  }
  //collision between egg and pig
  for(var i=0;i<egg_number.length;i++){
    for(var j=0;j<smallPig.length;j++){
      //for smmall pig
      if(egg_number[i].hits(smallPig[j])==true){
       
        smallPig[j].fine=4;
        smallPig[j].hit=true;
     }
     //for old pig
     if(egg_number[i].hits(oldPig[j])==true){
       
      oldPig[j].fine=4;
      oldPig[j].hit=true;
   }
    }
  }
  
  frameRate(15);
}
 
function mousePressed(){
  bird.move();
  if(count%2==0){

  egg_number.push(new Egg(bird.x,bird.y));
  }
 
  
  count++;
}

function keyPressed(){
  if(key=='w'){
    bird.move();
    bird.vel=0;
  }
  if(key=='a'){
    bird.vel=-10;
  
  }
  if(key=='d'){
    bird.vel=10;
  }
}

  
