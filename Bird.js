class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1= loadImage("sprites/smoke.png")
    this.path=[] //decalred and initialized 
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.position.x>200 && this.body.velocity.x>2){
  
   var Pathway=[this.body.position.x,this.body.position.y]
   this.path.push(Pathway)
    }
   for(var i= 0; i <= this.path.length-1; i=i+1)
    image(this.image1,this.path[i][0],this.path[i][1])
    
  }
}
