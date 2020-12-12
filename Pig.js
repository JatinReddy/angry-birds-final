class Pig extends BaseClass {
    constructor(x,y){
        super (x,y,40,40);
        this.image = loadImage("sprites/enemy.png")
        this.visibility = 255;

    }
    display(){
        
        //console.log(this.body.speed);

        if (this.body.speed < 5){
            super.display();
        }
        else{
            
            World.remove(world,this.body);
            push();
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,40,40);
            this.visibility = this.visibility-10;
            pop();
            
        }
    }
}