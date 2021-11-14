var input =  require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var X = parseInt(valores.shift());
var Y = parseFloat(valores.shift());

var consumo = X/Y;

console.log(consumo.toFixed(3) +" km/l")