var input =  require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n")

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

var x = A + B

console.log("X = " + x);
