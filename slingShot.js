class slingshot {
    
    constructor (pointA,bodyB) {

        var options = {
            pointA : pointA,
            bodyB : bodyB,
            stiffness:0.04,
            length:50,
           
        }


        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyB = null;
      }
      
    display () 
    {
        
        if(this.sling.bodyB){
            
        
        var pos = this.sling.bodyB.position;
        var posPoint = this.sling.pointA;
        stroke("black");
        strokeWeight(3);
        line (posPoint.x,posPoint.y,pos.x,pos.y);
        
        
        }
    }
    
    
}
