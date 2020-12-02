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
    }
    display(){
        if (this.sling.bodyA){
        var p1 = this.sling.bodyA.position;
        var p2 = this.sling.pointB;
        line(p1.x,p1.y,p2.x,p2.y);
        }
    }
    fly(){
        this.sling.bodyA = null;
    }

}
