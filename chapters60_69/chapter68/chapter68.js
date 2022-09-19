// Chapter 68
para1 = parentDiv.firstChild;
parentDiv.insertBefore(newPara, para1);

// no insertAfter
var target = parentDiv.childNode[1];
parentDiv.insertBefore(newE, target.nextSibling);

parentDiv.removeChild(noteToRemove);