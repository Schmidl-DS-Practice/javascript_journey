// Chapter 85
function validatezip(){
    var numchars = document.getElementById("zip").value.length;
    if (numchars < 5) {
        alert("enter 5");
        return false
    }
}

function validatezip(){
    var valueEntered = document.getElementById("zip").value;
    var numchars = valueEntered.length;
    if (numchars < 5) {
        alert("enter 5");
        return false
    }
    for (var i = 0; i <= 4; i++){
        var thisChar = parseInt(valueEntered[i]);
        if (isNaN(thisChar)){
            alert('only numbers');
            return false;
        }
    }
}