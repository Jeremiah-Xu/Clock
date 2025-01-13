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
  
  let h = doubleDigits(hour());
  let m = doubleDigits(minute());
  let s = doubleDigits(second());
  
  
  //anolgue clock
  
  strokeWeight(30);
  noFill();
  
  let msg = str(h)+" : "+  str(m)  +" : "+  str(s);
   
  
  stroke(50,240,255);
  let secondAngle = map(s, 0, 60, 0, 360);
  arc(0, 0, 375, 375, 0, secondAngle);
  
  stroke(100,170,255);
  let minuteAngle = map(m, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);
  
  stroke(200,100,255);
  let hourAngle = map(h%12, 0, 12, 0, 360);
  arc(0, 0, 185, 185, 0, hourAngle);
  
  //digital display
  fill(255);
  textFont(customFont); 
  strokeWeight(2);
  stroke(255);
  textSize(25);
  output = str(h)+" : "+  str(m)  +" : "+  str(s);
  rotate(s*6);
  text(output,80,36);
  
  
}

function doubleDigits(integer) {
  let intToString = integer.toString();
  let msg; 
  if (intToString.length == 1) {
    msg = "0"+intToString;
  } else {
    msg = intToString;
  }
  return msg;
}
