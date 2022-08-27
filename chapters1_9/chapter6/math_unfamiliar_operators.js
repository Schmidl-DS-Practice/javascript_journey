num++; // same as below
num = num + 1;

num--;

var num = 1;
var newnum = num++;
// newnum = 1 not 2...first the new variable is assigned the value of the original variable
// then the original variable is incremented.

// above is same as below
var num = 1;
var newnum = num;
num++

// to increment both variables, put the pluses before the variable
var  num = 1;
var newnum = ++num;

// above is the same as below
var num = 1;
num++;
var newnum = num;

// the above is the same with minuses