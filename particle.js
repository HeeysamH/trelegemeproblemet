// Daniel Shiffman
// http://codingtra.in
// Attraction / Repulsion
// Video: https://youtu.be/OAcXnzRNiCY

function Particle(x, y, mass, color, ballname) {
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

  this.attracted = function(target) {
    //Laver en variable der indholder en vector som peger mod target
    //(x2-x1)(y2-y1)    (target.pos.x - this.pos.x) (target.pos.y - this.pos.y)
    var force = p5.Vector.sub(target.pos, this.pos);
    
    //Laver variable d som indholder længden af vektoren der peger mod target
    // sqrt(  x^2 + y^2  )
    var r = force.mag();

    //Konstant
    var G = 50;

    //Beregner den kraft som kuglen skal bruge til at bevæge sig mod target
    var strength = G*((this.mass * target.mass)/(Math.pow((r + 10), 2)))
    
    //Sætter den beregnede styrke til variablen force
    force.setMag(strength);

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


    /*if (d < 20) {
      force.mult(0);
    }*/

    //Tilføjer kraften til accelerationen.
    this.acc.add(force);

  }

}
