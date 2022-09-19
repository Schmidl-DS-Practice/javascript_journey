// Chapter 84
/*
<form onSubmit="return validateradios();">
    <input type="radio" name="r1" value="cat"> cat<br>
    <input type="radio" name="r1" value="bat"> bat<br>
    <input type="radio" name="r1" value="hat"> hat<br>
    <input type="radio" value="submit form"> cat<br>
</form>
*/

function validateradios(){
    var radios = document.getElementsByName("r1");
    for (var i = 0; i < radios.length; i++){
        if (radios[i].checked){
            return true;
        }
    }
    alert("check one");
    return false;
}

function validateradios(ename){
    var radios = document.getElementsByName(ename);
    for (var i = 0; i < radios.length; i++){
        if (radios[i].checked){
            return true;
        }
    }
    alert("check one");
    return false;
}

/*
<form onSubmit="return validateradios('r1');">
*/