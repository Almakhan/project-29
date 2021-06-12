class Slingshot{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    length:5,
    stiffness:0.04
}

this.pointB=pointB;
this.sling=Constraint.create(options)
World.add(world,this.sling)
    }

release(){

    this.sling.bodyA=null
}
attach(body){
    this.sling.bodyA=body
}
    display(){

       if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB

      push();     
      stroke(48,22,8)
        
      if(pointA.x-220){
          strokeWeight(7)

      
line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)

      }
      else{
        strokeWeight(4)

      
        line(pointA.x+20,pointA.y,pointB.x-10,pointB.y)
        line(pointA.x+20,pointA.y,pointB.x+30,pointB.y-3)
          
      }
pop();
    }
}
}
