// Chapter 57
var e = document.getElementsById("rules");
var paragraphs = e.getElementsByTagName("p");

var t = document.getElementById("table9");
var cells = t.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++){
    cells[i].style.backgroundColor = "pink";
}