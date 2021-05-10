class Bond{
    constructor(body1,point){
        var o = {
            bodyA: body1,
            pointB:point,
            stiffness:0.05,
            length:320
        }
        this.con = Constraint.create(o);
        World.add(Mworld,this.con);
    }
    show() {
      if(this.con.bodyA) {

      
      var  one = this.con.bodyA.position;
       var two = this.con.pointB;
       push();
       strokeWeight(5)
       line(one.x,one.y,two.x,two.y);
       pop();
    }
    }
    fly() {
     this.con.bodyA = null;
    }
}
