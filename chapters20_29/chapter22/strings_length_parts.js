var firstChar = city_check.slice(0, 1);

var some_chars = city_check.slice(2, 5);

var other_chars = city_check.slice(1)
firstChar = firstChar.toUpperCase();
other_chars = other_chars.toLowerCase();
var capped_city = firstChar + other_chars;

var month = prompt("enter a month: ");
var chars_month = month.length;
if (chars_month > 3){
    month_abb = month.slice(0, 3);
}

var str = prompt("enter some text: ");
var num_chars = str.length;
for (var i = 0; i < num_chars; i ++){
    if (str.slice(i, i, + 2) === "  "){
        alert("no double spaces allowed");
        break;
    }
}



