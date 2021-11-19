var input =  require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

if(((A+B) > C) && ((A+C) > B) && ((B+C) > A)){
    var perimetro = A+B+C;
    console.log("Perimetro = " + perimetro.toFixed(1))
} else {
    var area = ((A+B)*C)/2;
    console.log("Area = " + area.toFixed(1));
}