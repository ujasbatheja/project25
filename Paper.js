class Paper
{
   constructor(x,y,radius)
   {
    var object_options= {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2

      }
      this.x=x;
      this.y=y;
      this.body=Matter.Bodies.circle(x,y,radius,object_options);
      World.add(world,this.body);
   }

   display()
   { var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      angleMode(RADIANS);
      strokeWeight(4);
      stroke("yellow");
      ellipseMode(RADIUS);
      ellipse(0,0,10,10,5);
      fill("red");
      pop()
   }

}