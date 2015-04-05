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
//hello

var input = [
  { x : 1, y : 1 },
  { x : 1, y : 2 }
];

var color = "black";

$(document).ready(function(){
  drawGrid(22,10);
  fillCells(input, color);
});