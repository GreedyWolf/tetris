/*
  Input      : # of row, # of columns
  Output     : Append x rows and y columns to table#playfield with proper class names
  Example    : drawGrid(4,2) --> Append the follow to table#playfield
                 <tr class='0'>
                   <td class='0'></td>
                   <td class='1'></td>
                   <td class='2'></td>
                   <td class='3'></td>
                 </tr> 
                 <tr class='2'>
                   <td class='0'></td>
                   <td class='1'></td>
                   <td class='2'></td>
                   <td class='3'></td>
                 </tr>
*/
function drawGrid(x,y){
  //Start here...
  var rows = x;
  var columns = y;

  //Create table rows
  for(var i = 0 ; i < rows ; i++) {
    $('#playfield').append("<tr class='" + i + "'></tr>");
  }  
  //create table columns
  for(var j = 0; j < columns; j++) {
    $('tr').append("<td class='" + j + "'></td>");
  }  
};

/*
  Input      : Arrays of coordinates, color
  Output     : Fill each table cell referenced by the array of coordinates in the specific color
  Example    : fillCells([{x:1, y:1}, {x:1,y:2}], 'black') -->
                 'tr.1 > td.1' and 'tr.1 > td.2' filled with color black
*/
function fillCells(array, color){
  //Start here...
  var coordinates = array;
  var color = color;

  for( var i = 0 ; i < coordinates.length ; i++) {
    $('tr.' + coordinates[i].x + '>' + 'td.' + coordinates[i].y).attr("bgcolor",color);
  }
};

setOrigin(0,4);
//block original coordinate
function setOrigin(x,y) {
  var origin = { x : "", y : "" };
  origin.x = x;
  origin.y = y;
}


/*
  Input : current coordinates
  Output: Generate tetrismino's coordinatates
  Example: each function produces an array object output with 4 coordinates
*/


function Square (current) {
  var Square = [{ x : current.x, y : current.y}];
  Square.push({ x : Square[0].x, y : current.y+1});
  Square.push({ x : Square[0].x+1, y : current.y});
  Square.push({ x : Square[0].x+1, y : current.y+1});
  return Square;
}

function Top (current) {
  var top_Shape = [{ x : (current.x+1), y : (current.y) }]; //center
  top_Shape.push({ x : top_Shape[0].x-1, y : top_Shape[0].y}); //one above center
  top_Shape.push({ x : top_Shape[0].x, y : top_Shape[0].y-1}); //one below center, left one
  top_Shape.push({ x : top_Shape[0].x, y : top_Shape[0].y+1}); //one below center, right one
  return top_Shape;
}

function Top2 (current) {
  var top_Shape_right = [ { x : (current.x+1), y : (current.y)}]; //center
  top_Shape_right.push({ x : top_Shape_right[0].x-1, y : top_Shape_right[0].y});  //one above center
  top_Shape_right.push({ x : top_Shape_right[0].x+1, y : top_Shape_right[0].y});  //one below center
  top_Shape_right.push({ x : top_Shape_right[0].x, y : top_Shape_right[0].y+1});  //right of center

  return top_Shape_right;
}


function Top3 (current) {
  var top_Shape_down = [ { x : (current.x+1), y : (current.y)}]; //center
  top_Shape_down.push({ x : top_Shape_down[0].x+1, y: top_Shape_down[0].y}); //one below
  top_Shape_down.push({ x : top_Shape_down[0].x, y : top_Shape_down[0].y+1}); // one right
  top_Shape_down.push({ x : top_Shape_down[0].x, y : top_Shape_down[0].y-1}); // one right
  return top_Shape_down;
}

function Top4 (current) {
  var top_Shape_left = [ { x : (current.x+1), y : (current.y)}]; //center
  top_Shape_left.push({ x : top_Shape_left[0].x-1, y : top_Shape_left[0].y}); //one above center
  top_Shape_left.push({ x : top_Shape_left[0].x+1, y : top_Shape_left[0].y}); //one below center
  top_Shape_left.push({ x : top_Shape_left[0].x, y: top_Shape_left[0].y-1});  //left of center
  return top_Shape_left;
}
function Bar (current) {
  var bar = [{ x : current.x, y : current.y }];
  bar.push({ x : bar[0].x , y : bar[0].y+1});
  bar.push({ x : bar[0].x , y : bar[0].y+2});
  bar.push({ x : bar[0].x , y : bar[0].y-1});
  return bar;
}

function Bar2 (current) {
  var bar2 = [{ x : current.x, y : current.y }];
  bar2.push({ x : bar2[0].x-1 , y : bar2[0].y});
  bar2.push({ x : bar2[0].x+1 , y : bar2[0].y});
  bar2.push({ x : bar2[0].x+2 , y : bar2[0].y});
  return bar2;
}

function left_L (current) {
  var L = [{ x : current.x+1, y : current.y}];
  L.push( {x : L[0].x-1, y : L[0].y });
  L.push( {x : L[0].x+1, y: L[0].y});
  L.push( {x : L[0].x+1, y: L[0].y+1});
  return L;
}
function left_L2 (current) {
  var L = [{ x : current.x+1, y : current.y}];
  L.push({ x : L[0].x, y : L[0].y-1});
  L.push({ x : L[0].x, y : L[0].y+1});
  L.push({ x : L[0].x+1, y : L[0].y-1});
  return L;
}
function left_L3 (current) {
  var L = [{ x : current.x+1, y : current.y}];
  L.push({ x : L[0].x-1, y : L[0].y});
  L.push({ x : L[0].x+1, y : L[0].y});
  L.push({ x : L[0].x-1, y : L[0].y-1});
  return L;

}
function left_L4 (current) {
  var L = [{ x : current.x+1, y : current.y}];
  L.push({ x : L[0].x, y : L[0].y-1});
  L.push({ x : L[0].x, y : L[0].y+1});
  L.push({ x : L[0].x-1, y : L[0].y+1});
  return L;
}

function right_L (current) {
  var L = [{ x : current.x+1, y : current.y+1}];
  L.push( {x : L[0].x-1, y : L[0].y });
  L.push( {x : L[0].x+1, y: L[0].y});
  L.push( {x : L[0].x+1, y: L[0].y-1});
  return L;

}

function right_L2 (current) {
  var L = [{ x : current.x+1, y : current.y+1}];
  L.push( {x : L[0].x, y : L[0].y+1});
  L.push( {x : L[0].x, y: L[0].y-1});
  L.push( {x : L[0].x-1, y: L[0].y-1});
  return L;

}

function right_L3 (current) {
  var L = [{ x : current.x+1, y : current.y+1}];
  L.push( {x : L[0].x-1, y : L[0].y});
  L.push( {x : L[0].x+1, y: L[0].y});
  L.push( {x : L[0].x-1, y: L[0].y+1});
  return L;
}
function right_L4 (current) {
  var L = [{ x : current.x+1, y : current.y+1}];
  L.push( {x : L[0].x, y : L[0].y+1});
  L.push( {x : L[0].x, y: L[0].y-1});
  L.push( {x : L[0].x+1, y: L[0].y+1});
  return L;
}
function left_ZZ (current){
  var left_ZZ = [{ x : current.x+1, y : current.y}];
  left_ZZ.push({ x : left_ZZ[0].x-1, y : left_ZZ[0].y});
  left_ZZ.push({ x : left_ZZ[0].x, y : left_ZZ[0].y+1});
  left_ZZ.push({ x : left_ZZ[0].x+1, y : left_ZZ[0].y+1});
  return left_ZZ;  
}
function left_ZZ2 (current){
  var left_ZZ = [{ x : current.x+1, y : current.y}];
  left_ZZ.push({ x : left_ZZ[0].x+1, y : left_ZZ[0].y});
  left_ZZ.push({ x : left_ZZ[0].x, y : left_ZZ[0].y+1});
  left_ZZ.push({ x : left_ZZ[0].x+1, y : left_ZZ[0].y-1});
  return left_ZZ;  
}
function right_ZZ (current){
  var right_ZZ = [{ x : current.x+1, y : current.y+1}];
  right_ZZ.push({ x : right_ZZ[0].x-1, y : right_ZZ[0].y});
  right_ZZ.push({ x : right_ZZ[0].x, y : right_ZZ[0].y-1});
  right_ZZ.push({ x : right_ZZ[0].x+1, y : right_ZZ[0].y-1});
  return right_ZZ;  
}
function right_ZZ2 (current){
  var right_ZZ = [{ x : current.x+1, y : current.y+1}];
  right_ZZ.push({ x : right_ZZ[0].x+1, y : right_ZZ[0].y+1});
  right_ZZ.push({ x : right_ZZ[0].x, y : right_ZZ[0].y-1});
  right_ZZ.push({ x : right_ZZ[0].x+1, y : right_ZZ[0].y});
  return right_ZZ;  
}


//random generate a shape. This is used with current coordinate to  produce a block coordinate

function generate_Shape() {

  var shape = "";
  if(Math.random() < 0.143 && Math.random() > 0) {
    shape = "square";

  }else if(Math.random() < 0.286 && Math.random() > 0.143) { 
    shape = "left_l";

  }else if(Math.random() < 0.429 && Math.random() > 0.286) {
    shape = "right_l";

  }else if(Math.random() < 0.571 && Math.random() > 0.429) {
    shape = "bar";
    
  }else if(Math.random() < 0.714 && Math.random() > 0.571) {
    shape = "top";
    
  }else if(Math.random() < 0.857 && Math.random() > 0.714){
    shape = "left_zz";
    
  }else{
    shape = "right_zz";
  }
  return shape;
}

//Generate block coordinate base on shape, and current coodirnate
function generate_Block (shape,current) {
  if(shape == "square") { return Square(current);}

  else if(shape == "left_l") { return left_L(current);}
  else if(shape == "left_l2"){ return left_L2(current);}
  else if(shape == "left_l3"){ return left_L3(current);}
  else if(shape == "left_l4"){ return left_L4(current);}

  else if(shape == "right_l"){  return right_L(current);}
  else if(shape == "right_l2"){ return right_L2(current);}
  else if(shape == "right_l3"){ return right_L3(current);}
  else if(shape == "right_l4"){ return right_L4(current);}

  else if(shape == "bar") {return Bar(current);}
  else if(shape == "bar2") {return Bar2(current);}

  else if(shape == "top") {return Top(current);}
  else if(shape == "top2"){return Top2(current);}
  else if(shape == "top3"){return Top3(current);}
  else if(shape == "top4"){return Top4(current);}


  else if(shape == "left_zz"){return left_ZZ(current);}
  else if(shape == "left_zz2"){return left_ZZ2(current);}

  else if(shape == "right_zz"){return right_ZZ(current);}
  else if(shape == "right_zz2"){return right_ZZ2(current);}
}

// check left boundary
function left_bound_check (coordinate) {
  var check = true;
  for( var i = 0; i < coordinate.length ; i++) {
    if(coordinate[i].y < 1) {
      return check = false;
      break;
    };
  }
  return check;
};

//check right boundary
function right_bound_check (coordinate) {
  var check = true;
  for( var i = 0; i < coordinate.length ; i++) {
    if(coordinate[i].y > 8 ) {
      return check = false;
      break;
    }
  }
  return check;
}

//check lower boundary
function lower_bound_check (coordinate) {
  var check = true;
  for( var i = 0; i < coordinate.length ; i++) {
    if(coordinate[i].x > 20) {
      return check = false;
      break;
    }
  }  
  return check;
}

$(document).ready(function(){

  //Create Gridbl
  drawGrid(22,10);
  //Create block, save initial block coordinate
  var current = { x : 0, y : 4 };
  var shape = generate_Shape();
  var Block = generate_Block(shape,current);
  fillCells(Block, "black");

setInterval(function(){
    fillCells(Block,"white");
    current.x++;
    Block = generate_Block(shape,current);
    fillCells(Block,"black");

},500);

$(document).keydown(function(e){

/*
    fillCells(Block,"white");
    current.x++;
    Block = generate_Block(shape,current);
    fillCells(Block,"black"); 
 */


  //move down
  if (e.keyCode == 40) {
    if(lower_bound_check(Block)){
    fillCells(Block,"white");
    current.x++;
    Block = generate_Block(shape,current);
    fillCells(Block,"black"); 
    } 
  };



  //move left
  if (e.keyCode == 37) {
    if(left_bound_check(Block)){
    fillCells(Block,"white");
    current.y--;
    Block = generate_Block(shape,current);
    fillCells(Block,"black"); 
    } 
  };

  //move right
  if (e.keyCode == 39) {
    if(right_bound_check(Block)){
    fillCells(Block,"white");
    current.y++;
    Block = generate_Block(shape,current);
    fillCells(Block,"black"); 
    } 
  };
  


  //rotate
  if (e.keyCode == 38) {

    if(shape == "square") {

    }else {
      fillCells(Block,"white");
    }
    if(shape == "left_l") {
      shape="left_l2";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "left_l2") {
      shape="left_l3";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "left_l3") {
      shape="left_l4";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "left_l4") {
      shape="left_l";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if(shape == "right_l") {
      shape="right_l2";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "right_l2") {
      shape="right_l3";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "right_l3") {
      shape="right_l4";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "right_l4") {
      shape="right_l";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if(shape == "top") {
      shape="top2";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "top2") {
      shape="top3";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "top3") {
      shape="top4";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "top4") {
      shape="top";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "top4") {
      shape="top";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if(shape == "bar") {
      shape="bar2";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "bar2") {
      shape="bar";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "left_zz") {
      shape="left_zz2";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "left_zz2") {
      shape="left_zz";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if(shape == "right_zz") {
      shape="right_zz2";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }else if (shape == "right_zz2") {
      shape="right_zz";
      Block=generate_Block(shape,current);
      fillCells(Block,"black");
    }
}

});

});
