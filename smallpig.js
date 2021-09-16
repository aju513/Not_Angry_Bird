class Smallpig{
	constructor(){
		this.animation=[];
		this.x=random(0,width-100);
		this.y=500;
		this.vy=2;
		this.vx=random(-4,4);
		this.hit=false;
		this.fine=0;
		
	}
	assests(){
		var frames=pig_json.frames;
		for(let i=0;i<frames.length;i++){
			let pos=frames[i].position;
			let img=pig_sprite.get(pos.x,pos.y,pos.w,pos.h);
			this.animation.push(img);
		}
		 
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
			this.vx=-2;
		}
		if(this.x<0){
			this.vx=2;
		}
		if(frameCount%50==0 && this.hit==false){
			this.fine=int(random(0,3));
		}
		  
	
		pop();
	}
}