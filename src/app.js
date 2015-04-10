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

/*
  Input : None
  Output: Generate tetrismino's coordinatates
  Example: Generate() produces an array object output with 4 coordinates
*/

function generate_Shape() {
  var origin= { x : 0, y : 4};

  //coordinates for six types of block

  var square = [ 
    { x : origin.x, y : origin.y },
    { x : origin.x, y : (origin.y + 1) },
    { x : (origin.x + 1) , y : origin.y },
    { x : (origin.x + 1), y : (origin.y +1) }
  ];

  var L_Shape = [
    { x : origin.x, y : origin.y },
    { x : (origin.x+1), y : (origin.y) },
    { x : (origin.x+2), y : (origin.y) },
    { x : ( origin.x+2), y: (origin.y+1) }
  ];

  var bar = [
    { x : origin.x, y : origin.y },
    { x : (origin.x+1), y : (origin.y) },
    { x : (origin.x+2), y : (origin.y) },
    { x : (origin.x+3), y : (origin.y) }
  ];
  
  var left_Shape = [
    { x : origin.x, y : origin.y },
    { x : (origin.x+1), y : (origin.y) },
    { x : (origin.x+1), y : (origin.y+1) },
    { x : (origin.x+2), y : (origin.y+1) }
    ];
 
  var right_Shape = [
    { x : (origin.x), y : (origin.y+1) },
    { x : (origin.x+1), y : (origin.y+1) },
    { x : (origin.x+1), y : (origin.y) },
    { x : (origin.x+2), y : (origin.y) }
    ];

  var top_Shape = [
  { x : (origin.x), y : (origin.y) },
  { x : (origin.x+1), y : (origin.y) },
  { x : (origin.x+1), y : (origin.y-1) },
  { x : (origin.x+1), y : (origin.y+1) }
  ];

  if(Math.random() < 0.166 && Math.random() > 0) {
    return square;
  }else if(Math.random() < 0.333 && Math.random() > 0.166) { 
    return L_Shape;
  }else if(Math.random() < 0.5 && Math.random() > 0.333) {
    return left_Shape;
  }else if(Math.random() < 0.666 && Math.random() > 0.5) {
    return right_Shape;
  }else if(Math.random() < 0.833 && Math.random() > 0.666) {
    return top_Shape;
  }else{
    return bar;
  }

}

$(document).keydown(function(e){
  if (e.keyCode == 37) {
  };
});




var input = [
  { x : 0, y : 4 },
  { x : 0, y : 5 },
  { x : 1, y : 4 },
  { x : 1, y : 5 }
];

var color = "black";

$(document).ready(function(){
  drawGrid(22,10);
  fillCells(generate_Shape(), color);
});

