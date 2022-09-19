// Chapter 64
for (var i = 0; i < howManyLi; i++){
    if (liElements[i].innerHTML == "") {
        liElements[i].innerHTML = "coming Soon";
    }
}

var numPics = 0;
for (var i = 0; i < howManyChildren; i++){
    if (nodelist[i].nodeName.toLowerCase() === "img"){
        numPics++;
    }
}