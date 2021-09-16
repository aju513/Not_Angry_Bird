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
//background
var backgroundImage;
var total=3;
//rock
var rock=[];

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
 
  for(var i=0;i<egg_number.length;i++){
    egg_number[i].show();
  }
  for(var i=0;i<smallPig.length;i++){
    smallPig[i].show();
  }
  for(var i=0;i<oldPig.length;i++){
    oldPig[i].show();
    
  }
  //collision between egg and pig
  //old pig
  for(var i=0;i<egg_number.length;i++){
    for(var j=0;j<smallPig.length;j++){
      
      if(egg_number[i].hits(smallPig[j])==true){
       
        smallPig[j].fine=4;
        smallPig[j].hit=true;
        egg_number.splice(i,1);
        smallPig[j].death(j);
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
        break;
     }
    }
  }
  //rock show
  if(frameCount%60==0){
    for(let i=0;i<oldPig.length;i++){
        rock.push(new Rock(oldPig[i]));

    }
    for(let i=0;i<smallPig.length;i++){
      rock.push(new Rock(smallPig[i]));
    }
  }
  for(let i=0;i<rock.length;i++){
    if(rock[i].hits(bird)==true){
      bird.fine=3;
      console.log('hits');
      bird.vel=0;
      oldPig=[];
      smallPig=[];
      rock=[];
      break;
    }
      rock[i].show();
  }

  frameRate(15);
}


function mousePressed(){
  bird.move();
  bird.fine=1;
  if(count%2==0){
  egg_number.push(new Egg(bird.x,bird.y));
  }
  count++;
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

  
