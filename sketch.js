let customFont; // Variable to store the font

function preload() {
  // Load the font from the assets folder
  customFont = loadFont("fonts/PoiretOne-Regular.ttf");
}


function setup() {
  createCanvas(500, 500);
  background(60, 50, 70);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);
  
  translate(width/2, height/2);
  
  rotate(-90);
  
  let h = hour();
  let m = minute();
  let s = second();
  
  fill(255);
  textFont(customFont); 
  strokeWeight(1);
  stroke(255);
  rotate(90);
  textSize(25);
  output = str(h)+" : "+  str(m)  +" : "+  str(s);
  text(output,0,0);
  rotate(-90);
  
  
  //anolgue clock
  
  strokeWeight(10);
  noFill();
  
  let msg = str(h)+" : "+  str(m)  +" : "+  str(s);
   
  
  stroke(150,250,255);
  let secondAngle = map(s, 0, 60, 0, 360);
  arc(0, 0, 360, 360, 0, secondAngle);
  
  stroke(150,150,255);
  let minuteAngle = map(m+s/60, 0, 60, 0, 360);
  arc(0, 0, 330, 330, 0, minuteAngle);
  
  stroke(200,100,255);
  let hourAngle = map(h+m/60+s/3600, 0, 12, 0, 360);
  arc(0, 0, 300, 300, 0, hourAngle);
}