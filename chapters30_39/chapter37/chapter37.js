// Chapter 37
function calctot(merchtot){
    var ordertot;
    if (merchtot >= 100){
        ordertot = merchtot;
    }
    else if (merchtot < 50.01){
        ordertot = merchtot + 5;
    }
    else {
        ordertot = merchtot + 5 + (0.03 * (merchtot - 50));
    }
    return ordertot;
}
var totaltocharge = calctot(79.99)
alert (calctot(79.00));

var ordertot = merchtot + calctax(merchtot);

var tot = calc(merchtot, calctax(merchtot));

function calc_tot(price){
    return price + calc_ship(price);
}