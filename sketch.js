

var yz = 100;
var boxcolor = 0
function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	
// mouse pressed
  if (mouseIsPressed) {
   boxcolor = 0;
   yz = 100;
}
  
// rectangle
fill(mouseX,0,mouseY);
  rect(yz, mouseY, 100, 560);
  yz = yz + 1


// text
fill(115,0,113);

  textSize(100);
	text("WOW i Love VIM", 200, mouseX-200);


}
