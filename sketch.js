
var boxcolor = 0;
var eSize = 20;
var biggerButton, smallerButton, currentSize, rSlider, gSlider, bSlider;

function setup() {
	createCanvas(800, 400);
  createP('');
  biggerButton = createButton("+");
  smallerButton = createButton("-");
  currentSize = createElement('h1',eSize);
  biggerButton.mousePressed(increaseSize);
  smallerButton.mousePressed(decreaseSize);
  rSlider = createSlider(0,255,100); 
  gSlider = createSlider(0,255,100);
  bSlider = createSlider(0,255,100);
  

}

function draw() {
	  
  // rectangle
  fill(mouseX,0,mouseY);
  ellipse(mouseX, mouseY, eSize);
  fill(255);
  textAlign(CENTER);
  textSize(40);
  text(eSize,40,40);
}


  // mouse pressed
  function mousePressed() {
    var r = rSlider.value();
    var g = gSlider.value();
    var b = bSlider.value();
    background(0);
  
    // text
  fill(r,g,b);
  textSize(100);
  
  text("WOW i Love VIM", 20, random(0,400));
}

function increaseSize() {
  eSize = eSize + 5;
  currentSize.html(eSize);
}
function decreaseSize() {
   eSize = eSize - 5;
   currentSize.html(eSize); 
   } 
