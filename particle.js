
//Particle function
function Particle(x, y, mass, color, ballname) {
  
  //Start variables
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  this.vel = createVector(); 

  

  this.acc = createVector(Math.floor(Math.random() * 1), Math.floor(Math.random() * 1));
  this.mass = mass;
  this.color = color;

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  //Draws the particle with p5.js to canvas.
  this.show = function() {

    if(color == "sun"){
      stroke(255, 204, 0);
    }else if(color == "earth"){
      stroke(0, 191, 255);
    }else if(color == "venus"){
      stroke(239, 239, 239);
    }
    
    strokeWeight(9);
    ellipse(this.pos.x, this.pos.y, 10, 10)

    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;

  }

  //attraction
  this.attracted = function(target) {
    //Create a variable that contains the vector that points towards the target.
    //(x2-x1)(y2-y1)    (target.pos.x - this.pos.x) (target.pos.y - this.pos.y)
    var force = p5.Vector.sub(target.pos, this.pos);
    
    //Creates a variable r that contain the distance of the vector.
    // sqrt(  x^2 + y^2  )
    var r = force.mag();

    //Constant
    var G = 50;

    //Calculates the force, from newtons law of gravitation
    var strength = G*((this.mass * target.mass)/(Math.pow((r + 10), 2)))
    
    //Sets new force
    force.setMag(strength);

    //Canvas.js related stuff
    if(color == "sun" && target.color == "earth"){
      dps.push({y: r})
      dps4.push({y: strength});
      chart.render();
      chart4.render();
    }else if(color == "sun" && target.color == "venus"){
      dps2.push({y: r})
      dps5.push({y: strength})
      chart2.render();
      chart5.render();
    }else if(color == "earth" && target.color == "venus"){
      dps3.push({y: r})
      dps6.push({y: strength})
      chart3.render();
      chart6.render();
    }

    //Add the force to the acceleration (p5.js calculations)
    this.acc.add(force);

  }

}
