
//Array that contains particles
var particles = [];

function setup() {
  createCanvas(1280, 720);

  //Sun
  particles.push(new Particle(200, 200, 2.5, "sun"));
  
  //Eatch
  particles.push(new Particle(500, 325, 1, "earth"));

  //Venus
  particles.push(new Particle(325, 432, 1, "venus"));
}

//Draw function
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
