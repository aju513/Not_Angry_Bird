let button =document.querySelector('button');
let gameover=document.getElementById('gameover')

function myFunction(){
	gameover.style.display="none";

	document.getElementById('change').innerHTML=score;
  score=0;
	bird=new Bird();
	bird.assests();
	gameOver=false;
  
  for(var i=0;i<total;i++){
      smallPig.push(new Smallpig());
      oldPig.push(new Oldpig());
  }
  for(var i=0;i<total;i++){
    smallPig[i].assests();
    oldPig[i].assests();
  }

}