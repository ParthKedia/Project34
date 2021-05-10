class Super {
    constructor(x,y) {
        var o = {
            isStatic: false,
            restitution: 0.8,
            density:5

        }
        this.body = Bodies.rectangle(x,y,400, 200,o);
        this.width = 400;
        this.height = 200;
        this.image = loadImage("Images/Superman.png")
        World.add(Mworld,this.body); 
    }
    show() {
     var pos = this.body.position;
     //pos.x = mouseX;
     //pos.y = mouseY
     push();
     var angle = this.body.angle;
     translate(pos.x,pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height); 
     pop();
    }
}