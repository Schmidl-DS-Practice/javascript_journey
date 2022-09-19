// Chapter 54
function swapPic(){
    var pic = document.getElementById("before");
    pic.src = "after-pic.jpg";
}

function getAddress(){
    var link = document.getElementById("link1");
    var address = link.href;
}

function enLargeForm(){
    var frm = document.getElementById("f12");
    frm.className = "jumbo";
}