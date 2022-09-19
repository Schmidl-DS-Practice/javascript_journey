// Chapter 51
/*
<p id="slowloris">
text. <a href="javascript:void(0);" onClick="expandLoris();"> Click for more.</a>
*/
function explandLoris(){
    var expanded = "some text";
    document.getElementById("slowLoris").innerHTML = expanded;
}

function placeAlist() {
    var listtoplace = "<ol><li>slow loris</li><li>fast loris</li><li>just-right loris</li></ol>";
    document.getElementById("lorislist").innerHTML = listtoplace;
}

function peekatcontent(){
    var whatsthere = document.getElementById("content").innerHTML;
}