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

// Chapter 31
var rigthnow = new Date();
var datestring = rightnow.toString();
var rightnow = new Date();
var theday = rightnow.getDay(); // is a number
var daynames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theday = now.getDay();
var nameoftoday = daynames[theday];

// Chapter 32
/*
getDay(); is a number
getMonth(); is a number
getDate(); number for day of month
getFullYear(); 4-digit number
getHours(); number 0-23
getMinutes(); number 0-59
getSeconds(); number 0-59
getMilliseconds(); number 0-999
getTime(); number of milliseconds that have elapsed since midnight Jan 1, 1970
*/

// Chapter 33
var today = new Date();
var doomsday = new Date("June 30, 2035");
var mstoday = today.getTime();
var msdoomsday = doomsday.getTime();
var msdiff = msdoomsday - mstoday;
var ddiff = msdiff / (1000 * 60 * 60 * 24);
ddiff = Math.floor(ddiff);

var d = new Date("July 21, 1983 13:25:00");

// Chapter 34
/*
setFullYear(); // pass a number
setMonth(); // pass a number
setDate(); // pass a number
setHours(); // pass a number
setMinutes(); // pass a number
setSeconds(); // pass a number
setMilliseconds(); // pass a number
*/

// Chapter 35

// Chapter 36

// Chapter 37

// Chapter 38

// Chapter 39

// Chapter 40

// Chapter 41

// Chapter 42

// Chapter 43

// Chapter 44

// Chapter 45

// Chapter 46

// Chapter 47

// Chapter 48

// Chapter 49

// Chapter 50

// Chapter 51

// Chapter 52

// Chapter 53

// Chapter 54

// Chapter 55

// Chapter 56

// Chapter 57

// Chapter 58

// Chapter 59

// Chapter 60

// Chapter 61

// Chapter 62

// Chapter 63

// Chapter 64

// Chapter 65

// Chapter 66

// Chapter 67

// Chapter 68

// Chapter 69

// Chapter 70

// Chapter 71

// Chapter 72

// Chapter 73

// Chapter 74

// Chapter 75

// Chapter 76

// Chapter 77

// Chapter 78

// Chapter 79

// Chapter 80

// Chapter 81

// Chapter 82

// Chapter 83

// Chapter 84

// Chapter 85

// Chapter 86

// Chapter 87

// Chapter 88

// Chapter 89
