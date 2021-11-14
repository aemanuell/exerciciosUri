var input =  require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ")

var val1 = parseInt(valores.shift())
var val2 = parseInt(valores.shift())
var val3 = parseInt(valores.shift())

var maioraux = (val1+val2+Math.abs(val1-val2))/2

var maiorAB = (maioraux + val3 + Math.abs(maioraux-val3))/2

console.log(maiorAB + " eh o maior")