var input =  require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n")

var number = parseInt(valores.shift())
var hours = parseInt(valores.shift())
var valueForHour = parseFloat(valores.shift())

var salary = hours * valueForHour

console.log("NUMBER = " + number)
console.log("SALARY = U$ " + salary.toFixed(2))