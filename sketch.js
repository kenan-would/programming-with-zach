
var boxcolor = 0;
var eSize = 20;

function setup() {
	createCanvas(windowWidth, windowHeight);
  var biggerButton = createButton('+');
  var smallerButton = createButton('-');
  biggerButton.mousePressed(increaseSize);
  smallerButton.mousePressed(decreaseSize);
}

function draw() {
	  
  // rectangle
  fill(mouseX,0,mouseY);
  ellipse(mouseX, mouseY, eSize);
}

  // mouse pressed
  function mousePressed() {
     background(0);
  // text
  fill(115,0,113);
  textSize(100);
	text("WOW i Love VIM", 200, random(0,windowHeight));
}

function increaseSize(){
  eSize = eSize + 5;
}

function decreaseSize() {
  eSize = eSize - 5
}

