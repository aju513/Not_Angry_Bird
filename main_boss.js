class MainBoss{
	constructor(){
		this.animation=[];
		this.x=random(0,width);
		this.y=400;
		this.vy=2;
		this.vx=20;
		this.fine=0;
		this.hit=false;
		this.i;
		this.j;
	}
	assests(){
		var frames=main_boss_json.frames;
		for(let i=0;i<frames.length;i++){
			let pos=frames[i].position;
			let img=pig_sprite.get(pos.x,pos.y,pos.w,pos.h);
			this.animation.push(img);
		}
	}
	show(){
		push();
	
		image(this.animation[0],this.x,this.y);
		if(this.y==380){
			this.vy=2;
		}
		else if(this.y==400){
			this.vy=-2;
		}
		this.y+=this.vy;
		this.x+=this.vx;
		if(this.x>=width-100){
			this.vx=-random(15,20);
		}
		if(this.x<0){
			this.vx=random(15,20);
		}
	
	
		

		pop();

	}
	move(){

	}

}