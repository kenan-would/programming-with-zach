
var boxcolor = 0;
var eSize = 20;
var biggerButton, smallerButton, rSlider, gSlider, bSlider, resetButton;
var r,g,b;
var randX, randY;

function setup() {
	createCanvas(800, 400);
   background(0);

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
   r = rSlider.value();
   g = gSlider.value();  
   b = bSlider.value();
  
  // rectangle
  fill(mouseX,0,mouseY);
  ellipse(mouseX, mouseY, eSize);
  
  fill(255);
  textAlign(CENTER);
  textSize(40);
  text(eSize,40,40);

  fill(r,g,b);
  textSize(40);
  text("I love VIM!!!",100,100);


  fill(255,0,0);
  text(r,width*.7,40);

  fill(0,255,0);
  text(g,width*.8,40);

  fill(0,0,255);
  text(b,width*.9,40);
}


  // mouse pressed
  function mousePressed() {
  background(0);
    randXY = random(50,height);
    // text
}

function increaseSize() {
  eSize = eSize + 5;
  currentSize.html(eSize);
}
function decreaseSize() {
   eSize = eSize - 5;
   currentSize.html(eSize); 
   } 
