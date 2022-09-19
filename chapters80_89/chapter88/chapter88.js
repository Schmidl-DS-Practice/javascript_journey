// Chapter 88
function checkPassword(){
    try{
        var pass = document.getElementById("f1").value;
        if (pass.length < 8){
            throw "enter at least 8";
        }
        if (pass.indexOf(" ") !== -1){
            throw "no spaces allowed;"
        }
        var numberSomewhere = false;
        for (var i = 0; i < pass.length; i++){
            if (isNaN(pass(i, i + 1)) === false){
                numberSomewhere = true;
                break;
            }
        }
        if (numberSomewhere === false){
            throw "include a number";
        }
    }
    catch(err){
        alert(err);
    }
}