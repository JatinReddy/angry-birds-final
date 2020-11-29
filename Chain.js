class Chain {
    constructor(body1,body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.06,
            length : 10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var p1 = this.chain.bodyA.position;
        var p2 = this.chain.bodyB.position;
        line(p1.x,p1.y,p2.x,p2.y);
    }

}
