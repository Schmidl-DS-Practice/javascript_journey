// Chapter 61
var nType = targetNode.nodeType;

var d = document.getElementById("humpty");
var pCounter = 0;
for (var i = 0; i < d.childNodes.length; i++){
    if (d.childNodes[i].nodeType === 1){
        pCounter++;
    }
    if (pCounter === 2){
        d.childNodes[i].innerHTML = "all his men.";
        break;
    }
}