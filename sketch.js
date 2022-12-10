let sky = [];
let stars;

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(1/2);

}

function draw() {

  stars = width/50;
  clear();

  background(0)
  stroke(255)


  sky = [];
  createStars(sky);



  for (let star of sky) {
    strokeWeight(random(5) + 5);
    point(star.x, star.y);

  }


  for (let i = 0; i < sky.length; i++) {
    let record = width/12;

    for (let j = 1; j < sky.length - 1; j++) {

      let now = sky[i].dist(sky[j]);
      if (now > 0 && now < record) {
        record = now;
        strokeWeight(1);

        stroke(255, 100)
        if (random() > 0.0) {
          // lineCount++;
          line(sky[i].x, sky[i].y, sky[j].x, sky[j].y);
          circle(sky[i].x, sky[i].y, random(5) + 5)
          if (random() > 0.99 && sky[i].x - record > 0 && sky[i].x + record < width && sky[i].y - record > 0 && sky[i].y + record < height) {
            noFill();
            circle(sky[i].x, sky[i].y, record)
          }
        }

      }
    }

  }

  for (let n = 0; n < random(100) + 100; n++) {
    let tooClose = false;
    let p = createVector(
      random(width),
      random(height)
    )

    for (let m = 0; m < sky.length; m++) {
    if (sky[m].dist(p) < 20)
      tooClose = true;
  }
  if (!tooClose) {
  strokeWeight(random(5));
  point(p.x, p.y);
  }


}

function createStars(sky) {
  for (let i = 0; i < stars; i++) {
    let star = createVector(
      random(width * 0.8) + width * 0.1,
      random(height * 0.8) + height * 0.1);


    sky.push(star);
  }
}
}
