
var boxcolor = 0;
var eSize = 20;
var biggerButton, smallerButton, rSlider, gSlider, bSlider, resetButton;

function setup() {
	createCanvas(800, 400);
  
  createP('');
  biggerButton = createButton("+");
  smallerButton = createButton("-");
  
  createP('');
  resetButton = createButton("RESET");
  biggerButton.mousePressed(increaseSize);
  smallerButton.mousePressed(decreaseSize);
  
  createP('');
  rSlider = createSlider(0,255,100); 
  gSlider = createSlider(0,255,100);
  bSlider = createSlider(0,255,100);

}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();  
  var b = bSlider.value();
  
  // rectangle
  fill(mouseX,0,mouseY);
  ellipse(mouseX, mouseY, eSize);
  
  fill(255);
  textAlign(CENTER);
  textSize(40);
  text(eSize,40,40);

  fill(255,0,0);
  text(r,40+60,40);

  fill(0,255,0);
  text(g,40+120,40);

  fill(0,0,255);
  text(g,40+180,40);
}


  // mouse pressed
  function mousePressed() {
    background(0);
  
    // text
  fill(r,g,b);
  textSize(100);
  textAlign(LEFT);
  text("WOW i Love VIM", 10, random(50,400));
}

function increaseSize() {
  eSize = eSize + 5;
  currentSize.html(eSize);
}
function decreaseSize() {
   eSize = eSize - 5;
   currentSize.html(eSize); 
   } 
