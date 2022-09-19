// Chapter 62
var targetNode = parentNode.childNodes[0];
var targetNode = parentNode.firstChild;
var targetNode = parentNode.childNodes[3];
var targetNode = parentNode.lastChild;
var pNode = childNode.parentNode;

var firstEl = document.getElementById("div1");
secondEl = firstEl.nextSibling; // null if doesn't exist
var nonexistentEl = firstEl.previousSibling; // null if doesn't exist