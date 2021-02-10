class Pig{
    constructor(x, y) {
        var options = {
            'restitution':0.9,
            'friction':1,
            'density': 0.5
            
        }
        this.body = Bodies.rectangle(x, y, 90, 90, options);
        this.width =90;
        this.height =90;
        this.Pimage= loadImage("enemy.png")
        
        World.add(world, this.body);
      }
      show(){
        push()
        var pos =this.body.position;
        
        var angle= this.body.angle;
        imageMode(CENTER);
        fill(0,255,0);
        translate(pos.x,pos.y)
        rotate(angle)
        image(this.Pimage, 0,0);
        pop()
      }
}