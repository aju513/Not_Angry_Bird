//whiteangrybird
var spriteimage;
var spritejson;
var bird;
var egg;
var egg_ready=true;
var count=0;
var eggsprite;
var egg_number=[];
var egg_divider=25;
//pigs
var pig_sprite;
var pig_json; 
var smallPig=[];
var oldPig=[];
var old_pig_json;
//background
var backgroundImage;
var total=3;
//rock
var rock=[];

var score=0;
var gameOver=false;




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
  bird.move_hori();
  egg_loader();
  pig_loader();
  collision_egg_pigs();
  rock_loader();
  gameend();
  more_spawn();
  gameend_below();
  frameRate(15);
  text_display();
  count++;
  egg_throw_speed();
  
  
}

//controls
function mousePressed(){
  bird.move_ver();
 
  if(egg_ready==true){
  
    egg_number.push(new Egg(bird.x,bird.y));
    count=0;
    egg_ready=false;
  }

}
function keyPressed(){
  if(key=='w'){
    bird.move();
    bird.fine=1;
    bird.vel=0;
  }
  if(key=='a'){
    bird.vel=-10;
  }
  if(key=='d'){
    bird.vel=10;
  }
}
//textdisplay
function text_display(){
  text(score,12,12);
  if(egg_ready==false){
    text("not ready",30,30);
  }
  else if(egg_ready==true){
    text("ready",30,30);
  }
}

//shortcut functions  
function egg_loader(){
  for(var i=0;i<egg_number.length;i++){
    egg_number[i].show();
    
  }
  for(var i=0;i<egg_number.length;i++){
    if(egg_number[i].y>700){
      egg_number.splice(i,1);
      break;
    }
  }
}

function pig_loader(){
  for(var i=0;i<smallPig.length;i++){
    smallPig[i].show();
  }
  for(var i=0;i<oldPig.length;i++){
    oldPig[i].show();
    
  }
}
function collision_egg_pigs(){
  //for small pig
  for(var i=0;i<egg_number.length;i++){
    for(var j=0;j<smallPig.length;j++){
     
      if(egg_number[i].hits(smallPig[j])==true){
       
        smallPig[j].fine=4;
        smallPig[j].hit=true;
        egg_number.splice(i,1);
        smallPig[j].death(j);
        score++;
        break;
     }
    }
  }
  //for old pig
  for(var i=0;i<egg_number.length;i++){
    for(var j=0;j<oldPig.length;j++){
      if(egg_number[i].hits(oldPig[j])==true){
        oldPig[j].fine=4;
        oldPig[j].hit=true;
        egg_number.splice(i,1);
        oldPig[j].death(i,j);
        score++;
        break;
     }
    }
  }
}

function rock_loader(){
  if(frameCount%60==0){
    for(let i=0;i<oldPig.length;i++){
        rock.push(new Rock(oldPig[i]));

    }
    for(let i=0;i<smallPig.length;i++){
      rock.push(new Rock(smallPig[i]));
    }
  }
  for(let i=0;i<rock.length;i++){
    if(rock[i].y<0){
      rock.splice(i,1);
      break;
    }
  }
}

function gameend(){
  for(let i=0;i<rock.length;i++){
    if(rock[i].hits(bird)==true && gameOver==false){
      bird.fine=4;
      console.log('hits');
      bird.vel=0;
      oldPig=[];
      smallPig=[];
      rock=[];
      gameOver=true;
      gameover.style.display='block';
      break;
    }
      rock[i].show();
  }
}
function more_spawn(){
  if(gameOver==false && smallPig.length==0 && oldPig.length==0){
    for(let i=0;i<score/5;i++){
      smallPig.push(new Smallpig());
      oldPig.push(new Oldpig());
    }
    for(var i=0;i<score/5;i++){
      smallPig[i].assests();
      oldPig[i].assests();
    }
    
  }
}
function egg_throw_speed(){
  if(count%egg_divider==0){
    egg_ready=true;
  }
  if(score%40==0){
    egg_divider-=5;

  }
  if(egg_divider==0){
    egg_divider=2;
  }
}
function gameend_below(){
  if(bird.y>500){
    bird.fine=4;
    console.log('hits');
    bird.vel=0;
    oldPig=[];
    smallPig=[];
    rock=[];
    gameOver=true;
    gameover.style.display='block';
  }
}