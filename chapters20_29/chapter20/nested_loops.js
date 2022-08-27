var firstNames = ["asfasf", "rtyjf", "dgfsdh"];
var lastNames = ["thret", "regsv", "dfgdbd"];

var fullNames = [];

for (var i = 0; i < firstNames.length; i++){
    for (var j = 0; j < lastNames.length; j++){
        fullNames.push(firstNames[i] + lastNames[j])
    }
}