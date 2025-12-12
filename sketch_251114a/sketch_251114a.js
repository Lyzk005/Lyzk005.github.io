var chicy = 450;
var chicx = 100;
var chicSize = 10;

var foody = 450;
var foodx = 100;
var foodSize = 40;

var score = 0;
var state = "S1";

var obstay = 450;
var obstax = 1300;
var obstaSize = 40;

var speedx = 3;
var speedy = 2;
var flip = 1; 
var heady = 0; 

var headAngle = 0;
var moving = false;

var currentChicken = 1; 


function setup(){
createCanvas(1300,600);
textAlign (CENTER);
textSize (20);

}

function draw(){
background(10, 120, 120, 255);


 
 

if(state == "S1"){
stage1();
}

if(state == "S2"){
stage2();
}

if(state == "S3"){
stage3();
}

if(state == "S4"){
stage4();
}

if(state == "Lose"){
lose();
}

if(state == "victory"){
victory();
}

//border

if (chicx < 30) chicx = 30;
if (chicx >1250) chicx = 1250;
if (chicy < 40 ) chicy = 40;
if (chicy > 550 ) chicy = 550;

if (foodx < 30) foodx = 30;
if (foodx >1250) foodx = 1250;
if (foody < 40 ) foody = 40;
if (foody > 500 ) foody = 500;

 moving = false; 
 
if(keyIsDown(87)){   //  'w'
    chicy -= 3;  
    moving = true;
}

if(keyIsDown(83)){   //  's'
   chicy += 3;  
   moving = true;
}

if(keyIsDown(65)){   //  'a'
   chicx -= 3;  
   flip = -1; 
   moving = true;
}

if(keyIsDown(68)){   //  'd'
   chicx += 3; 
   flip = 1;
   moving = true;
}

 if (moving) {
    headAngle += 0.35;              
    heady = sin(headAngle) * 15;    
}
    else {
     heady = 0;
  }

if(keyIsDown(82)){   //  'r'
  restartGame();   
}

text(("Score: " + score),width/2,50);
}
  
  
  
  
  
 


function stage1(){
text("Stage 1", width/2, height-40);
textSize(30);
   drawChicken();
   obsta(obstax, obstay, obstaSize);
   food(foodx, foody, foodSize);
  
    
  obstax += speedx;
  obstay += speedy;

  var leftBound = 30;
  var rightBound = width - 30;
  var topBound = 40;
  var bottomBound = height - 40;

  if (obstax > rightBound) {
    obstax = rightBound;
    speedx *= -1;
    
  } else if (obstax < leftBound) {
    obstax = leftBound;
    speedx *= -1;
  }

  if (obstay > bottomBound) {
    obstay = bottomBound;
    speedy *= -1;
    
  } else if (obstay < topBound) {
    obstay = topBound;
    speedy *= -1;
  }
  
var distToChic = dist(foodx, foody, chicx, chicy); // distance between obstacle and chicken
if (distToChic < (chicSize/2 +foodSize/2)) {
  score += 1;
  chicSize += 1;
  obstaSize += 1;
 
  foodx = random(50, width - 50);
  foody = random(50, height - 50);
  
 if (score >= 10){
   state = "S2";
   currentChicken = 2;
  }   
 }
  var distToChicObsta = dist(obstax, obstay, chicx, chicy); // distance between obstacle and chicken
if (distToChicObsta < (chicSize/2 + obstaSize/2)) {
    state = "Lose";
}   

    else if(score >= 100){
    state = "victory";
  }
}  


  function stage2(){
text("Stage 2", width/2, height-40);
   drawChicken();
   obsta(obstax, obstay, obstaSize);
   food(foodx, foody, foodSize);
  
    
  obstax += speedx;
  obstay += speedy;

  var leftBound = 30;
  var rightBound = width - 30;
  var topBound = 40;
  var bottomBound = height - 40;

  if (obstax > rightBound) {
    obstax = rightBound;
    speedx *= -1;
    
  } else if (obstax < leftBound) {
    obstax = leftBound;
    speedx *= -1;
  }

  if (obstay > bottomBound) {
    obstay = bottomBound;
    speedy *= -1;
    
  } else if (obstay < topBound) {
    obstay = topBound;
    speedy *= -1;
  }
  
var distToChic = dist(foodx, foody, chicx, chicy); // distance between obstacle and chicken
if (distToChic < (chicSize/2 +foodSize/2)) {
  score += 1;
  chicSize += 1;
  obstaSize += 1;
 
  foodx = random(50, width - 50);
  foody = random(50, height - 50);
  
 if (score >= 20){
   state = "S3";
   currentChicken = 3;
  }   
 }
  var distToChicObsta = dist(obstax, obstay, chicx, chicy); // distance between obstacle and chicken
if (distToChicObsta < (chicSize/2 + obstaSize/2)) {
    state = "Lose";
}   

    else if(score >= 100){
    state = "victory";
  }
}  

  
 function stage3(){
text("Stage 3", width/2, height-40);
   drawChicken();
   obsta(obstax, obstay, obstaSize);
   food(foodx, foody, foodSize);
  
    
  obstax += speedx;
  obstay += speedy;

  var leftBound = 30;
  var rightBound = width - 30;
  var topBound = 40;
  var bottomBound = height - 40;

  if (obstax > rightBound) {
    obstax = rightBound;
    speedx *= -1;
    
  } else if (obstax < leftBound) {
    obstax = leftBound;
    speedx *= -1;
  }

  if (obstay > bottomBound) {
    obstay = bottomBound;
    speedy *= -1;
    
  } else if (obstay < topBound) {
    obstay = topBound;
    speedy *= -1;
  }
  
var distToChic = dist(foodx, foody, chicx, chicy); // distance between obstacle and chicken
if (distToChic < (chicSize/2 +foodSize/2)) {
  score += 1;
  chicSize += 1;
  obstaSize += 1;
 
  foodx = random(50, width - 50);
  foody = random(50, height - 50);
  
 if (score >= 30){
   state = "S4";
   currentChicken = 4;
  }   
 }
 var distToChicObsta = dist(obstax, obstay, chicx, chicy); // distance between obstacle and chicken
if (distToChicObsta < (chicSize/2 + obstaSize/2)) {
    state = "Lose";
}   

    else if(score >= 100){
    state = "victory";
  }
}  

 function stage4(){
text("Stage 4", width/2, height-40);
   drawChicken();
   obsta(obstax, obstay, obstaSize);
   food(foodx, foody, foodSize);
  
    
  obstax += speedx;
  obstay += speedy;

  var leftBound = 30;
  var rightBound = width - 30;
  var topBound = 40;
  var bottomBound = height - 40;

  if (obstax > rightBound) {
    obstax = rightBound;
    speedx *= -1;
    
  } else if (obstax < leftBound) {
    obstax = leftBound;
    speedx *= -1;
  }

  if (obstay > bottomBound) {
    obstay = bottomBound;
    speedy *= -1;
    
  } else if (obstay < topBound) {
    obstay = topBound;
    speedy *= -1;
  }
  
var distToChicFood = dist(foodx, foody, chicx, chicy); // distance between food and chicken
if (distToChicFood < (chicSize/2 +foodSize/2)) {
  score += 1;
  chicSize += 1;
  obstaSize += 1;
 
  foodx = random(50, width - 50);
  foody = random(50, height - 50);
  
 if (score >= 40){
   //state = "S5";
   currentChicken = 5;
  }   
 } 
  
var distToChicObsta = dist(obstax, obstay, chicx, chicy); // distance between obstacle and chicken
if (distToChicObsta < (chicSize/2 + obstaSize/2)) {
    state = "Lose";
  
}   

    else if(score >= 100){
    state = "victory";
   
  }
  
} //close



//victory function

function victory(){
  background(255, 255, 200,255);  
  textAlign(CENTER, CENTER);
  textSize(80);
  text(" Success Grow Up! ", width / 2, height / 2 - 50);
  
  textSize(30);
  text("Final Score: " + score, width / 2, height / 2 + 40);
  text("Press R to Restart", width / 2, height / 2 + 100);
  

}

function lose(){
  background(175, 85, 90,255);  
  textAlign(CENTER, CENTER);
  textSize(80);
  text(" LOSE! ", width / 2, height / 2 - 50);
  
  textSize(30);
  text("Final Score: " + score, width / 2, height / 2 + 40);
  text("Press R to Restart", width / 2, height / 2 + 100);
  

}

// restart function

function restartGame() {
  state = "S1";
   chicx = 100;
    chicy = 450;
    obstay = 450;
    obstax = 1300;
    chicSize = 10;
    obstaSize = 40;
    currentChicken = 1;
    
  score = 0;
}
  
  
function drawChicken() {
  if (currentChicken == 1) {
    chic1(chicx, chicy, chicSize, heady, flip);
  } 
  else if (currentChicken == 2) {
    chic2(chicx, chicy, chicSize, heady, flip);
  }
   else if (currentChicken == 3) {
    chic3(chicx, chicy, chicSize, heady, flip);
  }
   else if (currentChicken == 4) {
    chic4(chicx, chicy, chicSize, heady, flip);
  }
   else if (currentChicken == 5) {
    chic5(chicx, chicy, chicSize, heady, flip);
  }
}

  
  
  
//objects function

function chic1(x, y, s, heady, flip) {
  push();
  translate(x, y);
  scale(s / 65 * flip,s / 65);
  strokeWeight(5);
  
  
  fill(250, 240, 140);
  beginShape();
  vertex(-57, 50);
  vertex(20, 75);
  vertex(-20, 80);
  vertex(17, 30);
  vertex(7, 30);
  endShape(CLOSE);

 //head
 
  fill(250, 240, 140);
  ellipse(17, 10 + heady, 70, 50);
  fill(0);
  ellipse(27, 10 + heady, 10, 10);
  fill(255, 165, 0);
  triangle(50, 20 + heady, 50, 50 + heady, 19, 30 );

  pop();
  
}

function chic2(x, y, s, heady, flip) {
  push();
  translate(x, y);
  scale(s / 65 * flip,s / 65);
  strokeWeight(5);
  
  
  fill(250, 240, 140);
  beginShape();
  vertex(-57, 90);
  vertex(20, 95);
  vertex(-20, 100);
  vertex(17, 30);
  vertex(7, 30);
  endShape(CLOSE);

  //head
  
  fill(250, 240, 140);
  ellipse(17, 10 + heady, 70, 50);
  fill(0);
  ellipse(27, 10 + heady, 10, 10);
  fill(255, 165, 0);
  triangle(50, 20 + heady, 50, 50 + heady, 19, 30);

  pop();
  
}

function chic3(x, y, s, heady, flip) {
  push();
  translate(x, y);
  scale(s / 65 * flip,s / 65);
  strokeWeight(5);
  
  fill(250, 240, 140);
  beginShape();
  vertex(-77, 20);
  vertex(-57, 60);
  vertex(-10, 95);
  vertex(-40, 95);
  vertex(17, 20);
  vertex(1, 30);
  vertex(-37, 40);
  endShape(CLOSE);

  //head
  
  fill(250, 240, 140);
  ellipse(17, 10 + heady, 70, 50);
  fill(0);
  ellipse(27, 10 + heady, 10, 10);
  fill(255, 165, 0);
  triangle(50, 20 + heady, 50, 50 + heady, 19, 30);

 pop();
  
}

function chic4(x, y, s, heady, flip) {
  push();
  translate(x, y);
  scale(s / 65 * flip,s / 65);
  strokeWeight(5);
  fill(250, 240, 140);
  beginShape();
  vertex(-77, 20);
  vertex(-77, 60);
  vertex(-57, 80);
  vertex(-15, 100);
  vertex(-47, 100);
  vertex(-17, 80);
  vertex(5, 65);
  vertex(17, 30);
  vertex(-10, 30);
  vertex(-37, 40);
  endShape(CLOSE);

  //head
  
  fill(250, 240, 140);
  ellipse(17, 20 + heady, 70, 60);
  fill(0);
  ellipse(27, 20 + heady , 10, 10);
  fill(255, 165, 0);
  triangle(50, 30 + heady, 50, 60 + heady , 19, 40 );
  
   
 pop();
  
}

function chic5(x, y, s, heady, flip) {
  push();
  translate(x, y);
  scale(s / 65 * flip,s / 65);
  strokeWeight(5);
  fill(255);
  beginShape();
  vertex(-97, 0);
  vertex(-97, 30);
  vertex(-107, 70);
  vertex(-87, 90);
  vertex(-5, 130); //leg
  vertex(-37, 130); //leg
  vertex(-5, 80);
  vertex(15, 65); //ch
  vertex(17, 30); //chest
  vertex(-50, 30);
  vertex(-57, 30);
  vertex(-47, 40);
  endShape(CLOSE);

  
  fill(255);
  ellipse(17, 20 + heady, 80, 70);
  fill(0);
  ellipse(17, 30 + heady, 5, 10);
  fill(255, 165, 0);
  triangle(50, 40 + heady, 50, 70 + heady , 19, 40 );
  
   
 pop();
  
}

function obsta(x, y, s) {
  push();
  translate(x, y);
  scale(s / 65);
  strokeWeight(4);
  
  beginShape();
  fill(250, 40, 40, 150);
  circle(50, 20, 50);

  pop();
}

function food(x, y, s) {
  push();
  translate(x, y);
  scale(s / 65);
  strokeWeight(5);
   
  fill(250, 240, 140);
  beginShape(); 
  vertex(20, 45);
  vertex(47, 30);
  vertex(7, 30);
  endShape(CLOSE);

  
  pop();
  
}
