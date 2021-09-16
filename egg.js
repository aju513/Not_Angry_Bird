class Egg{
	constructor(x,y){
		this.x=x+46;
		this.y=y+117;
		 
	}

	show(){
		push();
		let img=eggsprite.get(0,0,197,246);
		img.resize(50,80);
		image(img,this.x,this.y);
		 
		this.y+=10;
		pop();
	}
	hits(pig){
		if(dist(pig.x,pig.y,this.x,this.y)<60){
			return true;
		}
		 

	}

}