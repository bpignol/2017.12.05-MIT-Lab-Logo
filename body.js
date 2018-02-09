// THIS IS AN OBJECT

function body(o, t, h){ // creating an object 
// origine and target, so here the body needs 2 blocks but it can have as may criteria as we need
// h is for hue, because we want the 3 body colors to be harmonious
  this.origin = new block(o.x, o.y, o.w, o.h, "origin");
  this.target = new block(t.x, t.y, t.w*3, t.h*3, "target");
  this.h = h;

 

  //** ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** *
  // DESCRIBE POLYGON

  this.showTarget = function(){ // defining an object.

    noStroke();
    // fill(255);
    // rect(this.target.x, this.target.y, this.target.w, this.target.h); // target before to have the origin in the front 
    // HSL : Hue (color degree >> 360), sat (100), light (100), a = transparent (1);
    fill(this.h, 100, 50, 0.5);


    //1er case
    if(t.x < o.x && t.y < o.y){ 
      beginShape();
        vertex(this.target.nw.x, this.target.nw.y); //vertex is coordinates of a point
        vertex(this.target.ne.x, this.target.ne.y);
        vertex(this.origin.ne.x, this.origin.ne.y);
        vertex(this.origin.sw.x, this.origin.sw.y);
        vertex(this.target.sw.x, this.target.sw.y);
      endShape(CLOSE);

    }

    //2nd case
      else if(t.x >= o.x && t.y < o.y){ 
      beginShape();
        vertex(this.target.nw.x, this.target.nw.y);
        vertex(this.target.ne.x, this.target.ne.y);
        vertex(this.target.se.x, this.target.se.y);
        vertex(this.origin.se.x, this.origin.se.y);
        // vertex(this.origin.sw.x, this.origin.sw.y); not needed because behing the black origin
        vertex(this.origin.nw.x, this.origin.nw.y);
      endShape(CLOSE);

    }

    //3rd case
      else if(t.x >= o.x && t.y >= o.y){ 
      beginShape();
        // vertex(this.origin.nw.x, this.origin.nw.y); not needed because behing the black origin
        vertex(this.origin.ne.x, this.origin.ne.y);
        vertex(this.target.ne.x, this.target.ne.y);
        vertex(this.target.se.x, this.target.se.y);
        vertex(this.target.sw.x, this.target.sw.y);
        vertex(this.origin.sw.x, this.origin.sw.y);
      endShape(CLOSE);

    }

    //4th case
      else {
    // else if(t.x < o.x && t.y >= o.y){ 
      beginShape();
        vertex(this.target.nw.x, this.target.nw.y);
        vertex(this.origin.nw.x, this.origin.nw.y);
    // vertex(this.origin.ne.x, this.origin.ne.y); not needed because behing the black origin   
        vertex(this.origin.se.x, this.origin.se.y);
        vertex(this.target.se.x, this.target.se.y);
        vertex(this.target.sw.x, this.target.sw.y);
      endShape(CLOSE);

    }

   }

  //** ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** *
  // DESCRIBE ORIGIN

  this.showOrigin = function(){ // defining an object.
    fill(0);
    rect(this.origin.x, this.origin.y, this.origin.w, this.origin.h); // origin (call at the end in order to be in front of the target)
    
  }
}