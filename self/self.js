function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0); 
  fill(220, 220, 225);
  ellipse(500, 300, 400, 400);

  // left eye 
  fill(220, 220, 225);
  ellipse(420, 300, 100, 110);
 fill(0)
  ellipse(430, 290, 40, 60);

  // right eye 
  fill(220, 220, 225);
  ellipse(580, 300, 100, 110);
 fill(0)
  ellipse(570, 290, 40, 60); 
  
 //nose
 fill(0)
    ellipse(500, 350,20, 20); 
    
 //mouth
  fill(150);
    ellipse(500, 420,50, 30); 
}
