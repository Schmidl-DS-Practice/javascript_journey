// Chapter 86
function validateEmail(){
    var eEntered = document.getElementById("email").value;
    if (eEntered.indexOf(" ") !== -1){
        alert("no spaces allowed");
        return false;
    }
}

function validateEmail(){
    var addressIsLegal = true;
    var eEntered = document.getElementById("email").value;
    if (eEntered.indexOf(" ") !== -1){
        var addressIsLegal = false;
    }
    if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5){
        addressIsLegal = false;
    }
    if (addressIsLegal === false){
        alert("correcrt email");
        return false;
    }
}