// Chapter 53
// <img src="" id="" onMouseover="swapPic();>"
function swapPic(){
    document.getElementById("before").src = "after-pic.jpg";
}
// <img .. onMouseover="swapPic(id, 'after-pic.jpg);">
function swapPic(eId, newpic){
    document.getElementById(eId).src = newpic;
}