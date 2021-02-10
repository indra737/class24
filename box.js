class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.9,
        'friction':1,
        'density': 0.5
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Oimage= loadImage("wood1.png")
    
    World.add(world, this.body);
  }
  show(){
    push()
    var pos =this.body.position;
    var angle= this.body.angle;
    imageMode(CENTER);
    fill(70,40,30);
    
    translate(pos.x,pos.y)
    rotate(angle)
    image(this.Oimage,0, 0, this.width, this.height);
    pop()
  }
};
