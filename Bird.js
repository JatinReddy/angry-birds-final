class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png")
        Matter.Body.setDensity(this.body,0.05);
        this.smokeImage = loadImage("sprites/smoke.png");
        this.trajectory = [];
    }

    //[[x1,y1],[x2,y2],[x3,y3]...[xn,yn]] --> this.trajectory ..length is n
    //image(img,this.trajectory[0][0],this.trajectory[0][1]) - image at x1,y1
    //image(img,this.trajectory[1][0],this.trajectory[1][1])
    //image(img,this.trajectory[2][0],this.trajectory[2][1])
    //image(img,this.trajectory[3][0],this.trajectory[3][1])
    //image(img,this.trajectory[n-1][0],this.trajectory[n-1][1])

    display(){
        //this.body.position.x = mouseX
        //this.body.position.y = mouseY
        super.display();
        if(this.body.velocity.x > 10 && this.body.position.x > 190){
            var pos = [this.body.position.x, this.body.position.y]
            this.trajectory.push(pos)
        }
        

        for(var i = 0; i<this.trajectory.length; i ++){
            image(this.smokeImage,this.trajectory[i][0], this.trajectory[i][1]);
        }
    }
}
