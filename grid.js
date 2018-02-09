// THIS IS AN OBJECT

function grid(r, c, m){ // creating an object 
  this.rows = r;
  this.columns = c;
  this.margin = m;
  this.blocks = []; // array of all blocks
  this.availableBlocks = []; // array of all blocks in the available subzone for the target (big blocks not above the edge)
  this.bodies =[]; // array for the 3 bodies per grid

}
