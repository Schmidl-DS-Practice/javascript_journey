// Chapter 52
// give image id
// add event handler
// use CSS class for invisibility: .hidden {display:none;}
function makeinvisible(){
    document.getElementById("ugly").className="hidden";
}
// .value (form fields)
// .innerHTML (paragraphs, divs, other HTML elements
// .className (replaces any classes assigned in static markup)
function makebig(){
    document.getElementById("p1").className += " big";
}