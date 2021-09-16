class Rock{
	constructor(pig){
		this.x=pig.x;
		this.y=pig.y;
		this.vel=random(10,20);
	 
	}
	show(){

		let img1=pig_sprite.get(0,707,25,20);
		 
		 
		image(img1,this.x,this.y);
		this.y-=this.vel;
		 

	}
}