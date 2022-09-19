// Chapter 49
/*
<form>
    Email:
    <input type="text">
    <input type="submit" value="Submit">
</form>

<form>
    Email:
    <input type="text" id="email">
    <input type="submit" value="Submit">
</form>

<form onSubmit="checkAddress('email');">
    Email:
    <input type="text" id="email">
    <input type="submit" value="Submit">
</form>
*/
function checkAddress(fieldId){
    if (document.getElementById(fieldId).value === ""){
        alert("email address requrie");
    }
}

function checkAddress(fieldId){
    var val = document.getElementById(fieldId).value;
    if (val === ""){
        alert("email address requrie");
    }
}