// Daniel Shiffman
// http://codingtra.in
// Attraction / Repulsion
// Video: https://youtu.be/OAcXnzRNiCY

var particles = [];

function setup() {
  createCanvas(1280, 720);

  // for (var i = 0; i < 10; i++) {
  //   attractors.push(createVector(random(width), random(height)));
  // }

  //Sun
  particles.push(new Particle(200, 200, 2.5, "sun"));
  
  //Eatch
  particles.push(new Particle(500, 325, 1, "earth"));

  //Venus
  particles.push(new Particle(325, 432, 1, "venus"));
}

function draw() {
  background(51);
  stroke(255);


  particles.forEach(particle => {

    particles.forEach(particle2 => {
      if(particle != particle2){
        particle.attracted(particle2);
      }
    })

    particle.update();
    particle.show();
  });

}
