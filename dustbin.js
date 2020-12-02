class Dustbin{
    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.dustbinWidth=200;
        this.dustbinHeight=100;
        this.wallThickness=20;
        this.angle=0;
    
        this.image=loadImage("dustbin.png")

        this.body = Bodies.rectangle(x,y,width,height);
        this.width=width
        this.height=height
        World.add(world,this.body);
    
    
    }

display() {
var pos = this.body.position;    
imageMode(CENTER);
image(this.image, 800, 270, 155, 200);
}

}