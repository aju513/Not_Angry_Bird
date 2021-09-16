class Bird{
	constructor(){
		this.animation=[];
		this.up=60;
		this.gravity=11;
		this.x=0;this.y=0;
		this.vel=0;
	}
	assests(){
		var frames=spritejson.frames;
		 
		for(let i=0;i<frames.length;i++){
			let pos=frames[i].position;
			let img=spriteimage.get(pos.x,pos.y,pos.w,pos.h);
			this.animation.push(img);
			
		}
	}
	show(){
		push();
		if(this.x>width-100){
			this.x=width-100;
		}
		if(this.x<0){
			this.x=0;
		}
		image(this.animation[count%2],this.x,this.y);
		this.y+=this.gravity;
		pop();
	}
	move(){
		this.y-=this.up;
	}
	move_hori(){
		this.x+=this.vel;
	}

}