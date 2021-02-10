class Bird{
    constructor(x, y) {
        var options = {
            'restitution':0.9,
            'friction':1,
            'density': 0.5
            
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.r =100;
        this.Bimage= loadImage("bird.png")
        
        World.add(world, this.body);
      }
      show(){
        push()
        var pos =this.body.position;
        pos.x=  mouseX
        pos.y= mouseY
        var angle= this.body.angle;
        imageMode(CENTER);
        fill(255,0,0);
        translate(mouseX,mouseY)
        //rotate(angle)
        image(this.Bimage,0,0,this.r,this.r);
        pop()
      }
}