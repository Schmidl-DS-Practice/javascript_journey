// Chapter 81
function checkforpopupblocker(){
    var testpop = window.open("", "", "");
    if (testpop === null){
        alert("please disable your popup blocker");
    }
    testpop.close();
}

function checkforpopupblocker(){
    var testpop = window.open("", "", "");
    if (testpop === null || typeof(testpop) === "undefined"){
        alert("please disable your popup blocker");
    }
    testpop.close();
}