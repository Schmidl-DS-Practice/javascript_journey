// Chapter 50
/*
<form>
    ZIP:
    <input type="text" id="zip" onBlur="fillCity();"><br>
    City:<br>
    <input type="text" id="city">
</form>
*/
function fillCity(){
    var cityname;
    var zipentered = document.getElementById("zip").value;
    switch(zipentered){
    case "60608":
        cityname = "Chicago";
        break;
    case "68114":
        cityname = "Omaha";
        break;
    case "53212":
        cityname = "Milwaukee";
    }
    document.getElementById("city").value = cityname;
}