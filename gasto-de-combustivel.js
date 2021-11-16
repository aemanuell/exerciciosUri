var input =  require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var hour = lines.shift();
var velAverage = lines.shift();

var liters = hour * velAverage / 12;

console.log(liters.toFixed(3));