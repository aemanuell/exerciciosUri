var input =  require("fs").readFileSync("stdin", "utf8");

var line = input.split(" ");

var A = parseFloat(line.shift().split());
var B = parseFloat(line.shift().split());
var C = parseFloat(line.shift().split());

var delta = (B*B)-4*A*C;

var R1 = ((B*-1) + Math.sqrt(delta))/(2*A);
var R2 = ((B*-1) - Math.sqrt(delta))/(2*A);

if(A>0 && delta >= 0){
    console.log("R1 = " + R1.toFixed(5));
    console.log("R2 = " + R2.toFixed(5));
} else {
    console.log("Impossivel calcular")
}