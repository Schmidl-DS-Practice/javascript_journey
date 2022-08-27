var match_found = "no";

for (var i = 0; i <= 4; i++){
    if (city_to_check === cleanest_city[i]){
        match_found = "yes";
        alert("it's one of the cleanest cities");}}

if (match_found === "no"){
    alert("it's not one of the cleanest cities");}

//
    var match_found = false;

for (var i = 0; i <= 4; i++){
    if (city_to_check === cleanest_city[i]){
        match_found = true;
        alert("it's one of the cleanest cities");}}

if (match_found === false){
    alert("it's not one of the cleanest cities");}

//
var match_found = false;

for (var i = 0; i <= 4; i++){
    if (city_to_check === cleanest_city[i]){
        match_found = true;
        alert("it's one of the cleanest cities");
        break;}}

if (match_found === false){
    alert("it's not one of the cleanest cities");}

//
var match_found = false;
var num_ele = cleanest_city.length;

for (var i = 0; i <= num_ele; i++){
    if (city_to_check === cleanest_city[i]){
        match_found = true;
        alert("it's one of the cleanest cities");}}

if (match_found === false){
    alert("it's not one of the cleanest cities");}
