// THIS IS AN OBJECT

function block(x, y, w, h, t, rC, cC){ // creating an object. optional : row coordinate et column coordinate for subzone.
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.type = t; // type ex : background, origin, target
  this.coordinates = [rC, cC]; // as in excel : cell A45 for instance. the coordinates of each block can be read in the console
  this.nw = createVector (x,y); // north west
  this.ne = createVector (x + w, y); // north east
  this.se = createVector (x + w, y + h); // south east
  this.sw = createVector (x, y + h); // south west
 
  this.show = function(){ // defining an object. The blocks will not be called (commented out in sketch), but we could display them for debugging. 
    fill(155); // fill block. stroke is useless because we use hsl and not rgb for the bodies.
    rect(this.x, this.y, this.w, this.h);     
    // rect(x,y,w,h) ellipse(x,y,w,h) point(x.y) it is a pixel vertrex(x,y) line between points 
    // this.x is more flexible than x
    fill(0); // fill text
    noStroke(); 
    text(this.coordinates, this.x, this.y+10);  // text and where to show it
  }  

}