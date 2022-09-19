// Chapter 82
/*
<form onSubmit = "return checkforlastname();">
*/
function checkforlastname(){
    if (document.getElementById("lastnamefield").value.length === 0){
        alert("enter last name");
        document.getElementById("lastnamefield").focus();
        return false;
    }
}

function checkforlastname(){
    var targetfield = document.getElementById("lastnamefield");
    if (targetfield.value.length === 0){
        alert("enter last name");
        targetfield.focus();
        return false;
    }
}

function checkforlastname(){
    var targetfield = document.getElementById("lastnamefield");
    if (targetfield.value.length === 0){
        alert("enter last name");
        targetfield.focus();
        targetfield.style.background = "yellow";
        return false;
    }
    targetfield.style.background = "white";
}