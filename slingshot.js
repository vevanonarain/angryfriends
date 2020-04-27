class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        this.sling=loadImage("sling/sling1.png")
        this.sling2=loadImage("sling/sling2.png")
        this.sling3=loadImage("sling/sling3.png")
        World.add(world, this.slingshot);
    }
    attach(body){this.slingshot.bodyA=body}
    fly(){
        this.slingshot.bodyA=null
    }

    display(){
        if(this.slingshot.bodyA){
            push();
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.slingshot.pointB;
            image(this.sling,90,370);
            image(this.sling2,60,370);
            if(pointA.x<220){
                strokeWeight(7);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
                stroke(48,22,8);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-4)    
            }else{
                strokeWeight(3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
                stroke(48,22,8);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-4);
            }
             pop();
        }
    }
    
}