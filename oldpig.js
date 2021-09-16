class Oldpig{
	constructor(){
		this.animation=[];
		this.x=random(0,width);
		this.y=500;
		this.vy=2;
		this.vx=random(-5,5);
		this.fine=0;
		this.hit=false;
		this.i;
		this.j;
	}
	assests(){
		var frames=old_pig_json.frames;
		for(let i=0;i<frames.length;i++){
			let pos=frames[i].position;
			let img=pig_sprite.get(pos.x,pos.y,pos.w,pos.h);
			this.animation.push(img);
		}
		 
	}
	death(i,j){
		this.hit=true;
		this.i=i;
		this.j=j;
	}
	show(){
		push();
	
		image(this.animation[this.fine],this.x,this.y);
		if(this.y==480){
			this.vy=2;
		}
		else if(this.y==500){
			this.vy=-2;
		}
		this.y+=this.vy;
		this.x+=this.vx;
		if(this.x>=width-100){
			this.vx=-random(0,5);
		}
		if(this.x<0){
			this.vx=random(0,5);
		}
		if(frameCount%25==0 && this.hit==false){
			this.fine=int(random(0,2));
		}
		else if(this.hit==true){
			this.fine++;
		}
		if(this.fine==7){
			this.hit=false;
			this.fine=0;
			oldPig.splice(this.j,1);
			 

		}
		

		pop();
	}
}