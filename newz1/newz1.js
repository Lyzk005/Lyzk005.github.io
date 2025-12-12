var myFont, seatImg; 
var bodyImg;


var timeCountdown = 0;


var circle1x = 450, circle1y = 500, circle1Size = 50;

var circlex = 850, circley = 500, circleSize = 50;

var sitx = 0, sity = 0, sitSize = 500;
var teacherx = 1100, teachery = 170;


var catx = 900, caty = 340, catSize = 400;
var bodyx = 645, bodyy = 220, bodySize = 400;


var char2x = 900, char2y = 300, char2Size = 400;
var char2handx = 328;
var char2handy = 294;




var charlx = 700;  
var charly = 350;

var charl1x = 550;  
var charl1y = 350;

var charl2x = 700;  
var charl2y = 350;

var charl3x = 600;  
var charl3y = 330;

var charl4x = 600;  
var charl4y = 330;






var timerStarted = false;

var cleanDragging = false;
var cleanOffsetX = 0;
var cleanOffsetY = 0;


var recessStartTime = 0;

var cleanGoingBack = false;
var charcleanX = 0;  
var charcleanY = 0;


var chopY = 0;         
var chopGoingUp = false;



var goingBack = false;  

var classheadx = 650;
var classheady = 300;
var headY = 300;

var char3x = 333, char3y = 270, char3Size = 400;
var charx = 900, chary = 300, charSize = 400;
var char1x = 900, char1y = 300, char1Size = 400;

var wakex = 200;
var wakey = 300;
var wakeSize = 40;

var baseY = 200;
var highestY = 300;
var count = 0;
var goingUp = false;
var goingDown = false;
var targetY = 170;

var headYscene1 = 300;
var classheadyscene1 = 300;

var eyeOpenW = 5;
var eyeOpenH = 15;

var eyeCloseW = 15;
var eyeCloseH = 2;

var y = baseY;

var state = "startP";






function preload() {

 humanImg = loadImage('humn.png');
 catImg = loadImage('cat.png');
 bodyImg = loadImage('body.png');
 vnImg = loadImage('vn.png');
 wakeupImg = loadImage('wakeup.png');
 sitImg = loadImage('sit.png');
 standImg = loadImage('stand.png');
 teacherImg = loadImage('teacher.png');
 
 seatImg = loadImage('seat.png');
 classupImg = loadImage('classup.png');
 classheadImg = loadImage('classhead.png');
 classwallImg = loadImage('classwall.png');
 charImg = loadImage('char.png');
 char3Img = loadImage('char3.png');
 char1Img = loadImage('char1.png');
 char2Img = loadImage('char2.png');
 char2handImg = loadImage('char2hand.png');
 towelImg = loadImage('towel.png');
 boardImg = loadImage('board.png');
 tableImg = loadImage('table.png'); 
 bedscImg = loadImage('bedsc.png');
 bpImg = loadImage('bp.png');
 bedImg = loadImage('bed.png');
 towel1Img = loadImage('towel1.png');
 table2Img = loadImage('table2.png');  
 charcleanImg = loadImage('charclean.png'); 

 charbodyImg = loadImage('charbody.png');
 lunchImg = loadImage('lunch.png');
 cafeteriaImg = loadImage('cafeteria.png'); 
 charlImg = loadImage('charl.png'); 
 charl1Img = loadImage('charl1.png');  
 slpImg = loadImage('slp.png');   
 charl2Img = loadImage('charl2.png');   
 charl3Img = loadImage('charl3.png');  
 charl4Img = loadImage('charl4.png');   
 hwImg = loadImage('hw.png'); 
 chooseImg = loadImage('choose.png');
 angryImg = loadImage('angry.png'); 
 
 eatImg = loadImage('eat.png'); 
 chopstImg = loadImage('chopst.png'); 
 hanImg = loadImage('han.png');
 
  tchImg = loadImage('tch.png');
  quietImg = loadImage('quiet.png');
  yardImg = loadImage('yard.png');
  endImg = loadImage('end.png');
 
 
 
 
 
 headImg = loadImage('head.png');
 myFont = loadFont('edosz.ttf');
}

function setup() {
  createCanvas(1300, 600);
  textFont(myFont);


}

function draw() {
  background(255);

  if (state === "startP") startP();
  else if (state === "prepare") prepare();
  else if (state === "seat") seat();
  else if (state === "sit") sit();
  else if (state === "stand") stand();
  else if (state === "standScene") standScene();
  else if (state === "beginScene1") beginScene1();
  else if (state === "beginScene2") beginScene2();
  else if (state === "out") out(); 
  else if (state === "cafeteria") cafeteria();
  else if (state === "lunch") lunch();
  else if (state === "eatz")eatz(); 
  else if (state === "afternoonnap") afternoonnap();
  else if (state === "nap") nap();
  else if (state === "sleep") sleep();
  else if (state === "back") back();
  else if (state === "aft") aft(); 
  
  
  else if (state === "recess") recess();    
  else if (state === "clean") clean();       
  else if (state === "home") home();          
  else if (state === "homework") homework();
  else if (state === "hw") hw(); 
  else if (state === "choose") choose();   
  else if (state === "angry") angry();     
 
 
  else if (state === "tch") tch();    
  else if (state === "yard") yard();    
  else if (state === "quiet") quiet();   
  else if (state === "end") end();     
  
 
  if (circlex < 300) circlex = 300; // set border for circle
  if (circley < 100) circley = 100;
  if (circley > 550) circley = 550;
  if (circlex > 1005) circlex = 1005;
  
  
  
  
}

// START PAGE
function startP() {
  background(200);  
  drawHan(width/2, height/2, 800, 500); 
  fill(255);
  textSize(100);
  stroke(0);
  strokeWeight(20);
  textAlign(CENTER);
  text("School Life", width/2, height/2 - 100);

  textSize(30);
  text("Press S to Start", width/2 , height/2 - 200 );
  strokeWeight(0);
}





// PREPARE
function prepare() {
  background(200);
  drawWakeup(width/2, height/2, 700, 500);
  drawBody(bodyx, bodyy, 570, 400);
  drawCat(catx, caty, 490, 330);

  fill(0);
  textAlign(CENTER);
  textSize(50);
  text("Prepare Stage", width/2, height/2 - 250);

  textSize(40);
  text("Press w to Continue", width/2, height/2 + 250);

  drawWake(wakex, wakey, wakeSize);

  catx -= 0.25;
  if (catx < 730) catx = 730;

  if (goingUp) {
    y -= 1;
    if (y <= highestY) {
      goingUp = false;
      goingDown = true;
    }
  }

  if (goingDown) {
    y += 2;
    if (y >= baseY) {
      y = baseY;
      goingDown = false;
    }
  }

 if (highestY <= targetY && state === "prepare") state = "seat";
}





// SEAT
function seat() {
  
 
  
  background(200);
  drawSeatImage(width/2, height/2, 800, 550);
  drawTowel1(width/2, height/2, 800, 500);   
  drawCircle(circlex, circley, circleSize);

 fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Find Your Seat", width/2, height/2 - 250);


  if (keyIsDown(68)) circlex += 5;
  if (keyIsDown(65)) circlex -= 5;
  if (keyIsDown(87)) circley -= 5;
  if (keyIsDown(83)) circley += 5;

  if (circlex >= 600 && circlex <= 750 && circley >= 210 && circley <= 230) {
    state = "sit";
  }
}

function sit() {
  background(200);
drawTeacher(teacherx, teachery, 350, 250);
  drawSit(width/2, height/2, 800, 500);

 fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Teacher Walking In ...", width/2, height/2 - 250);

  teacherx -= 1.5;


  if (teacherx < 500) {
    state = "stand";
    timeCountdown = millis();
  }
}

function stand() {
  background(200);
  drawStand(width/2, height/2, 800, 500);
  
 fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Be Ready", width/2, height/2 - 250);
  
  
  if (millis() -  timeCountdown > 1000) {
    state = "standScene";
   
  }
}






function standScene() {
  background(200);
  drawClasswall(width/2, height/2, 800, 500);

  charx -= 1;
  if (charx < 680) charx = 680;

  drawChar(charx, chary, 600, 400);
  drawClassup(width/2, height/2, 800, 500);
  drawHead(width/2, headY, 800, 500);
  drawClasshead(classheadx, classheady, 800, 500);

  fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Show Respect By Standing Up", width/2, height/2 - 250);
 
 
  if (keyIsDown(87)) { 
    headY -= 0.25; 
  }

if (headY < 270) headY = 270; 
if (classheady > 270) classheady -= 0.25; 
  else classheady = 270; 


   if (!timerStarted && headY <= 270) {  
    timerStarted = true;  
    timeCountdown = millis(); 
  }

 
  if (timerStarted && millis() - timeCountdown > 1000) {
    state = "beginScene1";
  }
}



// SCENE 1
function beginScene1() {
  background(200);
  drawClasswall(width/2, height/2, 800, 500);

  drawChar2hand(char2handx, char2handy - 50 , 300, 450);
  drawChar2(char2x - 570, char2y - 50, 630, 450);
  drawClassup(width/2, height/2, 800, 500);

  drawHead(width/2, headYscene1, 800, 500);
  drawClasshead(classheadx, classheadyscene1, 800, 500);


 fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Silent And Listen", width/2, height/2 - 250);



  if (!goingBack) {
    char2handx += 0.25;
    if (char2handx > 333) goingBack = true;
  } else {
    char2handx -= 0.25;
    if (char2handx < 328) goingBack = false;
  }
   if (millis() -  timeCountdown > 3000) { 
    state = "beginScene2";
  }
}





// SCENE 2
function beginScene2() {
  background(200);
  drawClasswall(width/2, height/2, 800, 500);
  drawChar3(char3x, char3y, 600, 400);
  drawTowel(width/2, height/2, 800, 500);
  drawClassup(width/2, height/2, 800, 500);
  drawHead(width/2, headYscene1, 800, 500);
  drawClasshead(classheadx, classheadyscene1, 800, 500);
  
 fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Class Ends", width/2, height/2 - 250);
  
  
  char3x += 2; 
  if (char3x >= 900) { 
    state = "out";
      
  }
}

function out() {
  background(200); 
  drawSeatImage(width/2, height/2, 800, 550);
  drawTowel1(width/2, height/2, 800, 500); 
  drawCircle(circlex, circley, circleSize);

 fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Head To The Door", width/2, height/2 - 250);


  if (keyIsDown(68)) circlex += 5;
  if (keyIsDown(65)) circlex -= 5;
  if (keyIsDown(87)) circley -= 5;
  if (keyIsDown(83)) circley += 5;

  
  if (
    circlex >= 850 && circlex <= 1000 &&
    circley >= 500 && circley <= 600
  ) {
    state = "cafeteria";
 
  }

}


function cafeteria() {
  background(200); 
  drawCafeteria(width/2, height/2, 800, 550);
  drawCircle1(circle1x, circle1y, circle1Size);


 fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Walk Downstairs", width/2 + 20, height/2 + 280);

  if (keyIsDown(68)) circle1x += 5;
  if (keyIsDown(65)) circle1x -= 5;
  if (keyIsDown(87)) circle1y -= 5;
  if (keyIsDown(83)) circle1y += 5;


  if (circle1x < 300) circle1x = 300; // set border for circle
  if (circle1y < 100) circle1y = 100;
  if (circle1y > 550) circle1y = 550;
  if (circle1x > 1005) circle1x = 1005;



if (
    circle1x >= 420 && circle1x <= 450 &&
    circle1y >= 200 && circle1y <= 330
  ) {
    state = "lunch";
}
}




function lunch() {
  background(200); 
  drawLunch(width/2, height/2, 800, 500);
  drawCharl(charlx, charly, 600, 400);
  
  fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Cafeteria", width/2, height/2 - 250);
  
  charly -= 1.5; 
  if (charly < 200) {  
    state = "eatz";
       timeCountdown = millis();
  }
}






function eatz() {
  background(200); 
  drawEat(width/2, height/2, 800, 500); 
  drawChopst(width/2, height/2 + chopY, 800, 500); 


fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Having Lunch", width/2, height/2 - 250);

  if (!chopGoingUp) {
    chopY += 0.25;       
    if (chopY > 10) chopGoingUp = true;
  } else {
    chopY -= 0.25;        
    if (chopY < -10) chopGoingUp = false;
  }

 if (millis() - timeCountdown > 1000) {
    state = "afternoonnap";
  }
}





function afternoonnap() {
  background(200); 
  drawSeatImage(width/2, height/2, 800, 550);
  drawTowel1(width/2, height/2, 800, 500); 
  drawCircle(circlex , circley, circleSize);


 fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Get your blanket and pillow ", width/2, height/2 - 250);

  if (keyIsDown(68)) circlex += 5;
  if (keyIsDown(65)) circlex -= 5;
  if (keyIsDown(87)) circley -= 5;
  if (keyIsDown(83)) circley += 5;

  
  if (
    circlex >= 700 && circlex <= 850 &&
    circley >= 50 && circley <= 130
  ) {
    state = "nap";

  }
}



function nap() {
  background(200); 
  drawBoard(width/2, height/2, 800, 500);
  drawTable2(width/2, height/2, 800, 500); 
  drawCharl1(charl1x, charl1y, 600, 400);
  
  
 fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Walk to your spot", width/2, height/2 - 250); 
  
  
  if (keyIsDown(68)) charl1x += 5;
  if (keyIsDown(65)) charl1x -= 5;
  
if (charl1x < 550) charl1x = 550;
if (charl1x > 1050) charl1x = 1050;


  if (charl1x > 1000) {
    state = "sleep";
    timeCountdown = millis();
}
}



function sleep() {
  background(200); 
  drawSlpImage(width/2, height/2, 800, 500);
  
  fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(20);
  textAlign(CENTER);
  text("Now Sleep", width/2 + 20, height/2 - 230);
  
  if (millis() - timeCountdown > 1000) {
    state = "back"; 
}
}



function back() {
  background(180);
  drawBoard(width/2, height/2, 800, 500);
  drawTable2(width/2, height/2, 800, 500); 
  drawCharl2(charl2x, charl2y, 600, 400);

fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Put them back in the cabinet", width/2, height/2 - 250);

  if (keyIsDown(68)) charl2x += 5;
  if (keyIsDown(65)) charl2x -= 5;
  
if (charl2x < 450) charl2x = 450;
if (charl2x > 800) charl2x = 800;


  if (charl2x < 500) {
    state = "recess";
   
}
}



function recess() {
  background(200); 
  drawSeatImage(width/2, height/2, 800, 550);
  drawTowel1(width/2, height/2, 800, 500); 
  drawCircle(circlex , circley, circleSize);

fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Make sure everything is clean", width/2, height/2 - 250);

  if (keyIsDown(68)) circlex += 5;
  if (keyIsDown(65)) circlex -= 5;
  if (keyIsDown(87)) circley -= 5;
  if (keyIsDown(83)) circley += 5;

  
  if (
    circlex >= 850 && circlex <= 950 &&
    circley >= 150 && circley <= 200
  ) {
    state = "clean";
    timeCountdown = millis(); 
  }

}



function clean() {
  background(220);
  drawBoard(width/2, height/2, 800, 500);
  drawCharclean(width/2 + charcleanX, height/2, 800, 500);
  drawCharbody(width/2, height/2, 800, 500); 
  drawTable2(width/2, height/2, 800, 500); 

fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Cleaning ..,", width/2, height/2 - 250);

  if (!cleanGoingBack) {
    charcleanX += 0.25;
    if (charcleanX > 10) cleanGoingBack = true;   
  } else {
    charcleanX -= 0.25;
    if (charcleanX < -10) cleanGoingBack = false; 
  }
   if (millis() -  timeCountdown > 2000) {
    state = "aft";
   }
}





function aft() {
  background(200);
  drawSeatImage(width/2, height/2, 800, 550);
  drawTowel1(width/2, height/2, 800, 500);   
  drawCircle(circlex, circley, circleSize);
  
  fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Go back to your seat", width/2, height/2 - 250);

  if (keyIsDown(68)) circlex += 5;
  if (keyIsDown(65)) circlex -= 5;
  if (keyIsDown(87)) circley -= 5;
  if (keyIsDown(83)) circley += 5;

  if (circlex >= 570 && circlex <= 750 && circley >= 210 && circley <= 230) {
    state = "home";
  }
}


function home() {
   background(200);
  drawBoard(width/2, height/2, 800, 500);
  drawCharl4(charl4x, charl4y, 600, 400); 
  drawTable2(width/2, height/2, 800, 500); 
  
  fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Class Started", width/2, height/2 - 250);
  
 charl4x -= 1.5;
  if (charl4x < 300) {
    state = "homework";
 timeCountdown = millis(); 
  }
}




function homework() {
   background(200);
  drawBoard(width/2, height/2, 800, 500);
  drawCharl3(charl3x, charl3y, 600, 400); 
  drawTable2(width/2, height/2, 800, 500); 

fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Homework Check", width/2, height/2 - 250);

 if (millis() -  timeCountdown > 1000) {
    state = "hw";
    timeCountdown = millis(); 
 }
}

function hw() {
   background(200);
  drawHw(width/2, height/2, 800, 500);
  
fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Waiting ...", width/2, height/2 - 250);
  
 if (millis() -  timeCountdown > 2000) {
    state = "choose";
 }
}

function choose() {
   background(200);
  drawChoose(width/2, height/2, 800, 500);
  
  fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Choose Your Answer", width/2, height/2 - 250);
  
     timeCountdown = millis(); 



}


function angry() {
   background(200);
  drawAngry(width/2, height/2, 800, 500);
  
  fill(255);
  textSize(50);
  stroke(0);
  strokeWeight(10);
  textAlign(CENTER);
  text("Mad", width/2, height/2 - 250);
  
   if (millis() -  timeCountdown > 1000) {
    state = "tch";
   }
}


function tch() {
   background(200);
  drawTch(width/2, height/2, 800, 500); 
   if (millis() -  timeCountdown > 4000) {
    state = "quiet";
      timeCountdown = millis(); 
   }
}



function quiet() {
   background(200);
  drawQuiet(width/2, height/2, 800, 500);
  if (millis() -  timeCountdown > 2000) {
    state = "yard";
      timeCountdown = millis(); 
  }
}


function yard() {
   background(200);
  drawYard(width/2, height/2, 800, 500); 
  if (millis() -  timeCountdown > 2400) {
    state = "end";
      timeCountdown = millis(); 
  }
}




function end() {
  background(200);
  drawEnd(width/2, height/2, 800, 500);
  
  strokeWeight(0);
  fill(0);
  textAlign(CENTER);
  textSize(180);
  text("The End", width/2, height/2 );
  
  textSize(40);
  text("Press s to Continue", width/2, height/2 + 100);
}


function resetPositions() {
  // Main characters
  circle1x = 450; 
  circle1y = 500;
  circleSize = 50;

  circlex = 850; 
  circley = 500;
  circleSize = 50;

  charx = 900; 
  chary = 300; 
  charSize = 400;

  char1x = 900; 
  char1y = 300; 
  char1Size = 400;

  char2x = 900; 
  char2y = 300; 
  char2Size = 400;
  char2handx = 328;
  char2handy = 294;

  charlx = 700;  
  charly = 350;

  charl1x = 550;  
  charl1y = 350;

  charl2x = 700;  
  charl2y = 350;

  charl3x = 600;  
  charl3y = 330;

  charl4x = 600;  
  charl4y = 330;

  // Cat, body
  catx = 900; 
  caty = 340; 
  catSize = 400;
  bodyx = 645; 
  bodyy = 220; 
  bodySize = 400;

  // Teacher and class head
  teacherx = 1100; 
  teachery = 170;
  classheadx = 650;
  classheady = 300;
  headY = 300;
  headYscene1 = 300;
  classheadyscene1 = 300;

  // Wakeup animation
  wakex = 200;
  wakey = 300;
  wakeSize = 40;
  baseY = 200;
  highestY = 300;
  count = 0;
  goingUp = false;
  goingDown = false;
  targetY = 170;

  // Chopsticks
  chopY = 0;
  chopGoingUp = false;

  // Cleaning
  charcleanX = 0;
  cleanGoingBack = false;

  // Timer
  timerStarted = false;
  timeCountdown = 0;
}




// KEY PRESS
function keyPressed() {
  if (key === 's' || key === 'S') {
    if (state === "startP") {
      resetPositions(); 
      state = "prepare";
    }
    if (state === "end") {
      resetPositions(); 
      state = "startP"; 
    }
  }

  if (state === "choose") {
    if (key === '1' || key === '2' || key === '3') {
      state = "angry";
    }
  }

  if (key === "w" && state === "prepare") {
    count +=1;
    highestY = baseY - count * 5;
    goingUp = true;
  }
}







// DRAW FUNCTIONS
function drawWake() {
  push();
  fill(255);
  stroke(0);
  strokeWeight(4);
  translate(10,0);

  ellipse(639, y, 50);

  var w, h;

  if (goingUp) { // eyes opening
    w = eyeOpenW;
    h = eyeOpenH;
  } 
  else if (goingDown) { //eyes closing.
    w = eyeCloseW;
    h = eyeCloseH;
  }
  else {
    w = 12;
    h = 8;
  }

  ellipse(630, y + 5, w, h - 7);
  ellipse(650, y + 5, w, h - 7);

  pop();
}

function drawCircle(x, y, size) {
  push();
  fill(255);
  stroke(0);
  strokeWeight(5);
  ellipse(x, y, size, size);
  pop();
}

function drawCircle1(x, y, size) {
  push();
  fill(255);
  stroke(0);
  strokeWeight(5);
  ellipse(x, y, size, size);
  pop();
}







function drawWakeup(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(wakeupImg, x, y, w, h);
  pop();
}

function drawSeatImage(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(seatImg, x, y, w, h);
  pop();
}

function drawChar(x, y, w, h) {
  push();
  translate(x, y);
  imageMode(CENTER);
  if (x <= 680) image(char1Img, 0, 0, w, h);
  else image(charImg, 0, 0, w, h);
  pop();
}

function drawChar3(x, y, w, h) {
  push();
  translate(x, y);
  imageMode(CENTER);
  image(char3Img, 0, 0, w, h);
 
  pop();
}


function drawTowel1(x, y, w, h) {
  push();
  imageMode(CENTER);
  image(towel1Img, x, y, w, h);
  pop();
}


function drawCharclean(x, y, w, h) {
  push();
  translate(x, y);
  imageMode(CENTER);
  image(charcleanImg, 0, 0, w, h);
 
  pop();
}

function drawCharbody(x, y, w, h) {
  push();
  translate(x, y);
  imageMode(CENTER);
  image(charbodyImg, 0, 0, w, h);
 
  pop();

}


function drawCharl(x, y, w, h) {
  push();
  imageMode(CENTER);
  image(charlImg, x, y, w, h);
  pop();
}


function drawChopst(x, y, w, h) {
  push();
  imageMode(CENTER);
  image(chopstImg, x, y, w, h);
  pop();
}


function drawEat(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(eatImg, x, y, w, h);
  pop();
}

function drawCharl1(x, y, w, h) {
  push();
  imageMode(CENTER);
  image(charl1Img, x, y, w, h);
  pop();
}


function drawSlpImage(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(slpImg, x, y, w, h);
  pop();
}

function drawCharl2(x, y, w, h) {
  push();
  imageMode(CENTER);
  image(charl2Img, x, y, w, h);
  pop();
}

function drawCharl3(x, y, w, h) {
  push();
  imageMode(CENTER);
  image(charl3Img, x, y, w, h);
  pop();
}

function drawCharl4(x, y, w, h) {
  push();
  imageMode(CENTER);
  image(charl4Img, x, y, w, h);
  pop();
}

function drawHw(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(hwImg, x, y, w, h);
  pop();
}

function drawChoose(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(chooseImg, x, y, w, h);
  pop();
}


function drawAngry(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(angryImg, x, y, w, h);
  pop();
}







function drawChar2hand(x, y, w, h) {
  push();
  translate(x, y);
  imageMode(CENTER);
  image(char2handImg, 0, 0, w, h);
  pop();
}

function drawChar2(x, y, w, h) {
  push();
  translate(x, y);
  imageMode(CENTER);
  image(char2Img, 0, 0, w, h);
  pop();
}

function drawClassup(x, y, w, h) {
  push();
  imageMode(CENTER);
  image(classupImg, x, y, w, h);
  pop();
}

function drawClasshead(x, y, w, h) {
  push();
  imageMode(CENTER);
  image(classheadImg, x, y, w, h);
  pop();
}

function drawClasswall(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(classwallImg, x, y, w, h);
  pop();
}


function drawLunch(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(lunchImg, x, y, w, h);
  pop();
}

function drawCafeteria(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(cafeteriaImg, x, y, w, h);
  pop();
}




function drawHead(x, y, w, h) {
  push();
  imageMode(CENTER);
  image(headImg, x, y, w, h);
  pop();
}



function drawBoard(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(boardImg, x, y, w, h);
  pop();
}

function drawTowel(x, y, w, h) {
  push();
  imageMode(CENTER);
  image(towelImg, x, y, w, h);
  pop();
}

function drawTable(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(tableImg, x, y, w, h);
  pop();
}

function drawTable2(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(table2Img, x, y, w, h);
  pop();
}




function drawHan(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(hanImg, x, y, w, h);
  pop();
}

function drawTch(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(tchImg, x, y, w, h);
  pop();
}

function drawQuiet(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(quietImg, x, y, w, h);
  pop();
}

function drawYard(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(yardImg, x, y, w, h);
  pop();
}

function drawEnd(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(endImg, x, y, w, h);
  pop();
}




function drawBody(x, y, w, h) {
  push();
  translate(x, y);
  imageMode(CENTER);
  image(bodyImg, 0, 0, w, h);
  pop();
}

function drawCat(x, y, w, h) {
  push();
  translate(x, y);
  imageMode(CENTER);
  image(catImg, 0, 0, w, h);
  pop();
}

function drawTeacher(x, y, w, h) {
  push();
  translate(x, y);
  imageMode(CENTER);
  image(teacherImg, 0 , 0, w, h);
  pop();
}

function drawSit(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(5);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(sitImg, x, y, w, h);
  pop();
}

function drawStand(x, y, w, h) {
  push();
  rectMode(CENTER);
  noFill();
  stroke(0);
  strokeWeight(5);
  rect(x, y, w, h);
  imageMode(CENTER);
  image(standImg,x, y, w, h);
  pop();
}
