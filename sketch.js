

var yz = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(200, mouseX/4, mouseY/2);
   // fill(255);
  }

  

//fill(red,green,blue);

fill(mouseX,0,mouseY);
  rect(mouseX, yz, 100, 560);
  yz = yz + 1


fill(115,0,113);

  textSize(100);
	text("WOW i Love VIM", 200, mouseX-200);


}
