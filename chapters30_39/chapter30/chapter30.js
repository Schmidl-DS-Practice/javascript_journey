// Chapter 30
var total = price + (price * taxrate);
var prettytotal = total.toFixed(2); // no decimal places = total.toFixed();
var currencytotal = "$" + prettytotal;
var str = num.toString();
if (str.charAt(str.length - 1) === "5"){
    str = str.slice(0, str.length - 1) + "6";
}
num = Number(str);
prettynum = num.toFixed(2);