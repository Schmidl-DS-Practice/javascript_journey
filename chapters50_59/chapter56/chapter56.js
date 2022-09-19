// Chapter 56
getElementById(th_id).style.fontSize = "2em";
var par = document.getElementsByTagName("p"); // index into par for each paragraph
var textinmiddleparagraph = par[1].innerHTML;

for (var i = 0; i < par.length; i++){
    par[i].style.fontFamily = "Verdana, Geneva, sans-serif"
}
var pics = document.getElementsByTagName("img");
var divs = document.getElementsByTagName("div");
var ulists = document.getElementsByTagName("ul");