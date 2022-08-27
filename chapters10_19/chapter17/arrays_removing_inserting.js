var pets = []

pets[0] = "dog";
pets[1] = "cat";
pets[2] = "fly";
pets[3] = "bug";
pets[4] = "ox";

//pets.shift();

//pets.unshift("fish", "ferret");

// removes elements
//pets.splice(2, 2, "pig", "duck", "emu");

// doesn't remove any elements
//pets.splice(2, 0, "pig", "duck", "emu");

// remove elements and doesn't add
//pets.splice(2, 2);

var noPets = pets.slice(2, 4);

alert(noPets)