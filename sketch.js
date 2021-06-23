var h,m,s;

function setup() {
  createCanvas(800,400);
  
  angleMode(DEGREES);
  
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  h = hour();
  m = minute();
  s = second();

  var hangle = map(h % 12,0,12,0,360);
  var sangle = map(s,0,60,0,360);
  var mangle = map(m,0,60,0,360);

  push();
  stroke("red");
  rotate(sangle);
  strokeWeight(4);
  line(0,0,100,0);
  pop();

  push();
  stroke("green");
  rotate(mangle);
  strokeWeight(4);
  line(0,0,75,0);
  pop();

  push();
  stroke("blue");
  rotate(hangle);
  strokeWeight(4);
  line(0,0,50,0);
  pop();

  // for every thing
  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();

  //second
  stroke(255,0,0);
  arc(0,0,300,300,0,sangle);
  
  //minute
  stroke(0,255,0);
  arc(0,0,280,280,0,mangle);

  //hour
  stroke(0,0,255);
  arc(0,0,260,260,0,hangle);

  drawSprites();
}