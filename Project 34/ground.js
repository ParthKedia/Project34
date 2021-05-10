class Ground {
    constructor(x,y) {
        var o = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,3000,30,o);
        this.width = 3000;
        this.height = 30;
        World.add(Mworld,this.body); 
    }
    show() {
     rectMode(CENTER);
     rect(this.body.position.x,this.body.position.y,this.width,this.height); 
    }
}