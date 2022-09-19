// Chapter 38
var thesum; // global
function addnumber(){
    thesum = 2 + 2;
}
addnumbers();

function addnumber(){
    var thesum = 2 + 2; // local
}
addnumbers();