var input =  require("fs").readFileSync("stdin", "utf8");

var line = input.split(" ");

var A = parseInt(line.shift().split());
var B = parseInt(line.shift().split());
var C = parseInt(line.shift().split());
var D = parseInt(line.shift().split());

if(B>C && D>A && ((C+D) > (A+B)) && C>0 && D>0 && ((A%2) == 0)){
    console.log("Valores aceitos")
} else {
    console.log("Valores nao aceitos")
}