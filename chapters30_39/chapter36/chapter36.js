// Chapter 36
function greet_user() {
    alert("Hello");
}

function greet_user(greeting){
    alert(greeting);
}

greet_user("hello there")
var greeting = "hello there";
greet_user(greeting);

var almostamil = 999999;
showbignum(almostamil);

function showmessage(m, string, num){
    alert (m + string + num);
}
var month = "March";
showmessage(month, "'s winning number is ", 23);