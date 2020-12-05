class Slingshot {
    constructor(body1,point){
        var options = {
            bodyA : body1,
            pointB : point,
            stiffness : 0.06,
            length : 10
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.image = loadImage("sprites/sling3.png");
    }
    display(){
        push();
        stroke("#4E240F");
        if (this.sling.bodyA){
        var p1 = this.sling.bodyA.position;
        var p2 = this.sling.pointB;
        strokeWeight(6)
        line(p1.x+25,p1.y,p2.x+25,p2.y);
        line(p1.x-10,p1.y,p2.x-25,p2.y);
        image(this.image,p1.x-25,p1.y-10,15,30);
        pop();
        }
    }
    fly(){
        this.sling.bodyA = null;
    }

}
