for (var i = 0; i < text.length; i++){
    if (text.slice(i, i + 12) === "world war ii"){
        text = text.slice(0, i) + "the second world war" + text.slice(i + 12);
    }
}


// indexOf > finds first instance
var firstChar = text.indexOf("world war ii");

var text = "to be or not to be";
var segIndex = text.lastIndexOf("be");