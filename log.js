class Log{
    constructor(x, y,height,angle) {
        var options = {
            'restitution':0.9,
            'friction':1,
            'density': 0.5
            
        }
        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width =20;
        this.height =height;
        this.Limage= loadImage("wood2.png")
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body);
      }
      show(){
        push()
        var pos =this.body.position;
        
        var angle= this.body.angle;
        imageMode(CENTER);
        fill(70,40,20);
        translate(pos.x,pos.y)
        rotate(angle)
        image(this.Limage,0, 0,20,this.height);
        pop()
      }
}