var city_to_check = prompt("enter your city: ");

city_to_check = city_to_check.toLowerCase();

for (var i = 0; i <= cleanest_cities.length; i++){
    if (city_to_check === cleanest_cities[i]){
        alert("one of the cleanest cities");
    }
}

// .toUpperCaase();
