// Chapter 89

// <input type="button" value="Click" id="button1">
var b1 = document.getElementById("button1");
b1.onclick = sayHello;

document.getElementById("button1").onclick = sayHello;

function sayHello(){
    alert("hi");
}

var targetimg = document.getElementById("i12");
targetimg.onmouseover = swapPic;

var emailFrm = document.getElementById("form5");
emailFrm.onsubmit = valEmail;