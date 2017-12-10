
var boxcolor = 0;
var eSize = 20;
var biggerButton, smallerButton, currentSize;

function setup() {
	createCanvas(800, 400);
  createP('');
  biggerButton = createButton("+");
  smallerButton = createButton("-");
  currentSize = createElement('h1',eSize);
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
	text("WOW i Love VIM", 200, random(0,400));
}

function increaseSize() {
  eSize = eSize + 5;
  currentSize.html(eSize);
}
function decreaseSize() {
   eSize = eSize - 5;
   currentSize.html(eSize); 
   } 
