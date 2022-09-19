// Chapter 75
var gottheproperty = "price" in plan1;
var gottheproperty = "calcAnnual" in plan1;

var listofproperties = [];
for (var prop in plan1){
    listofproperties.push(prop);
}
var listofproperties = [];
for (var prop in plan1){
    if (plan1.hasOwnProperty(prop)){
        listofproperties.push(prop);
    }
}

var isownedproperty = plan1.hasOwnProperty("price");