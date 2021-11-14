var input =  require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n")

var A = parseFloat(valores.shift())
var B = parseFloat(valores.shift())

var media = (3.5*A + 7.5*B)/11

console.log("MEDIA = " + media.toFixed(5))