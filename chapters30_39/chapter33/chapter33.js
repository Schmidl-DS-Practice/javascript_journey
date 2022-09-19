// Chapter 33
var today = new Date();
var doomsday = new Date("June 30, 2035");
var mstoday = today.getTime();
var msdoomsday = doomsday.getTime();
var msdiff = msdoomsday - mstoday;
var ddiff = msdiff / (1000 * 60 * 60 * 24);
ddiff = Math.floor(ddiff);

var d = new Date("July 21, 1983 13:25:00");