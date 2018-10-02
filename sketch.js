function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(210);
  var color3 = lerpColor(color('#B1F1FC'),color('#FF0049'),frameCount/(628*2))
  var color4 = lerpColor(color('#B1B8FC'),color('#FF0049'),frameCount/(628*2))

  setGradient(0, 0, windowWidth, windowHeight, color3, color4, "Y");
}

function draw() {



   translate(width/2,height/2);



  push();
   scale(2,2);
   stroke(lerpColor(color('#EC00FF'),color('#00E5E5'),frameCount/(628*2)));
   var x3= 400 * sin(frameCount/100 * 3);
   var y3= 400 * cos(frameCount/100 * 3);
   var x4= 200 * sin(frameCount/100);
   var y4= 200 * cos(frameCount/100);

   line(x3,y3,x4,y4);
   pop();

   var x1= 200 * cos(frameCount/100 * 3);
   var y1= 200 * sin(frameCount/100 * 3);
   var x2= 400 * cos(frameCount/100);
   var y2= 400 * sin(frameCount/100);


   stroke(lerpColor(color('#FF0049'),color('#2727FF'),frameCount/(628*2)));
   line(x1,y1,x2,y2);




  push();
   scale(0.25,0.25);

   stroke(lerpColor(color('#EC00FF'),color('#FFFFFF'),frameCount/(628*2)));

   var x5= 400 * sin(frameCount/100 * 3);
   var y5= 400 * cos(frameCount/100 * 3);
   var x6= 200 * sin(frameCount/100);
   var y6= 200 * cos(frameCount/100);

   line(x5,y5,x6,y6);
   pop();

}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == "X") {
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}
