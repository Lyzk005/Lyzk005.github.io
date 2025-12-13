var initials = 'mc'; 
var choice = '1'; 
var screenbg = 255; 
var lastscreenshot = 61;

var currentScale = 1;
var currentStroke = 1;
var currentColor = [0, 0, 0, 255];

function setup() {
  createCanvas(1300, 900);
  background(screenbg);
}

function draw() {
  // Scale controls
  if (keyIsDown(81)) currentScale += 0.1; // Q
  if (keyIsDown(87)) currentScale = max(1, currentScale - 0.1); // W

  // Stroke controls
  if (keyIsDown(83)) currentStroke += 0.1; // S
  if (keyIsDown(65)) currentStroke = max(1, currentStroke - 0.1); // A

  // Color controls
  if (keyIsDown(78)) currentColor = [255, 150, 0, 85];   // N
  if (keyIsDown(90)) currentColor = [255, 200, 0, 95];   // Z
  if (keyIsDown(88)) currentColor = [255, 0, 0, 95];     // X
  if (keyIsDown(72)) currentColor = [255, 0, 200, 95];   // H
  if (keyIsDown(67)) currentColor = [30, 140, 230, 75];  // C
  if (keyIsDown(66)) currentColor = [0, 0, 0, 255];      // B
  if (keyIsDown(70)) currentColor = [150, 100, 100, 95]; // F
  if (keyIsDown(86)) currentColor = [150, 0, 200, 95];   // V
  if (keyIsDown(71)) currentColor = [0, 200, 100, 95];   // G

  // Draw brush when mouse is pressed
  if (mouseIsPressed) {
    newkeyChoice(choice);
  }
}

// Handle key presses
function keyPressed() {
  // Tool selection (0-9)
  if ('0123456789'.includes(key)) {
    choice = key;
  }

  // Clear, save, reset
  clear_print();
}

// Draw selected brush
function newkeyChoice(toolchoice) {
  push();
  translate(mouseX, mouseY);
  scale(currentScale);
  strokeWeight(currentStroke);
  stroke(currentColor);
  noFill();

  if (toolchoice == '1') brush1();
  else if (toolchoice == '2') brush2();
  else if (toolchoice == '3') brush3();
  else if (toolchoice == '4') brush4();
  else if (toolchoice == '5') brush5();
  else if (toolchoice == '6') brush6();
  else if (toolchoice == '7') {
    strokeWeight(5);
    brush7();
  } else if (toolchoice == '8') brush8();
  else if (toolchoice == '9') {
    // Eraser-style
    strokeWeight(100);
    stroke(255);
    line(0, 0, pmouseX - mouseX, pmouseY - mouseY);
  } else if (toolchoice == '0') brush10();

  pop();
}

// Brushes
function brush1() {
  beginShape();
  fill(150, 0, 80);
  strokeWeight(0.1);
  point(0, 0.1); point(0, 1.1); point(0, 2.1); point(0, -1.1);
  point(2, -1.1); point(-1.1, -1.1); point(1, -1.1); point(0, -2.1);
  point(2, -2); point(-1.5, 2); point(-1, 1.1); point(2, 0.1);
  point(1, 0.1); point(-1, 0.1);
  endShape();
}

function brush2() {
  line(-102, 0, 12, 0);
  line(0, -12, 0, 12);
}

function brush3() {
  line(20, -12, 20, 72);
  line(-10, -12, 0, 92);
}

function brush4() {
  line(-12, 0, 12, 0);
  line(0, -12, 0, 12);
}

function brush5() {
  beginShape();
  vertex(-10, -5); vertex(0, -15); vertex(10, -5);
  vertex(6, 10); vertex(-6, 10);
  endShape(CLOSE);
}

function brush6() {
  ellipse(0, 0, 15, 15);
}

function brush7() {
  beginShape();
  fill(150, 0, 80);
  strokeWeight(0.1);
  point(0, 0.1); point(0, 1.1); point(0, 2.1); point(0, -1.1);
  point(2, -1.1); point(-1.1, -1.1); point(1, -1.1); point(0, -2.1);
  point(2, -2);
  endShape();
}

function brush8() {
  push();
  strokeWeight(0.5);
  noFill();
  for (var i = 0; i < 50; i++) point(random(-3, 3), random(-3, 3));
  translate(1.5, 2);
  for (var i = 0; i < 10; i++) point(random(-3, 3), random(-3, 3));
  pop();
}

function brush10() {
  beginShape();
  for (var i = 0; i < 10; i++) vertex(random(-10, 10), random(-10, 10));
  endShape();
}

// Handle clear, save, and reset
function clear_print() {
  if (key == 'e' || key == 'E') {
    background(screenbg);
  } else if (key == 'r' || key == 'R') {
    saveme();
  } else if (key == 't' || key == 'T') {
    currentScale = 1;
    currentStroke = 1;
  }
}

// Save canvas
function saveme() {
  let filename = initials + day() + hour() + minute() + second();
  if (second() != lastscreenshot) {
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot = second();
}
