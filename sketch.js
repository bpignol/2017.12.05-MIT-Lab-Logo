//THESE ARE VARIABLES --------------------------------------------------------

var rowsAndCols = 9;
var grid = new grid(rowsAndCols, rowsAndCols, 0); // call the grid described in object
var targetSize = 3;
var numBodies = 3;
var hu; // color scheme
var huVariance; // standard color gap 


//THIS IS THE BACKGROUND --------------------------------------------------------

function setup(){
  createCanvas(400,400);
  background(200);
  colorMode(HSL); // better than rgb because the shades are more fine, works like a color wheel at 360°
  hu = random(360);
  huVariance = random(360);

  //** ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** *
  // CREATE GRID, BLOCKS AND SUBZONE FOR TARGET

  //CREATE GRID
  for (var i = 0; i < rowsAndCols; i++) { // show y rows
    var posY = i * (height / rowsAndCols);
    for (var j = 0; j < rowsAndCols; j++){ // cut each rows by x
      var posX = j * (width / rowsAndCols);

      // CREATE BLOCKS 
      grid.blocks.push(new block(posX, posY, width/rowsAndCols, height/rowsAndCols, "background", i+1, j+1)) 
      // push is to fill the array
      // several blocks in a grid
      // i and j are for the subzone 

      // CALCULATE DISTANCE TO RIGHT AND BOTTOM GRID TO ASSESS ELIGIBILITY TO HOST A TARGET
      if(i<= grid.rows - targetSize && j <= grid.columns - targetSize){
        grid.availableBlocks.push(new block(posX, posY, width/rowsAndCols, height/rowsAndCols, "background", i+1, j+1));
        // go in console and call grid.availableBlocks to see the coordinates of the subzone
      }

    }
  }

 //** ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** *
  // SHOW BLOCKS TO HELP UNDERSTANDING : in an array, show blocks of the above push
  // for (var i = 0; i < grid.blocks.length; i++) { 
  //   grid.blocks[i].show(); 
  // }

  //** ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** *
  // CREATE BODY ELEMENTS

  //CREATE MANY ORIGINS AND TARGETS
  for (var i = 0; i < numBodies; i++) {
    //SELECT ORIGIN BLOCK
    var origin = grid.blocks[floor(random(grid.blocks.length-1))]; // take the last block for origin (first is zero, so last is max-1)
    //SELECT TARGET BLOCK
    var target = grid.availableBlocks[floor(random(grid.availableBlocks.length-1))];

    // CREATE MATCHING COLORS
    var h = hu + i * (huVariance/numBodies);


    // CREATE BODIES
    grid.bodies.push(new body(origin, target, h));

  };

  //** ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ** ** ** ** ** ** ** ** ** *
  // SHOW BODIES

  for (var i = 0; i < grid.bodies.length; i++) {
    grid.bodies[i].showTarget();
  }
  for (var i = 0; i < grid.bodies.length; i++) {
    grid.bodies[i].showOrigin(); // after in order to have all the origins displayed above the bodies
  }

}

//THESE ARE THE CALL'S RESULTS --------------------------------------------------------
// everything is drawn in the background without any specific call triggered. 
// No need for the function draw here since there is no animation and interaction