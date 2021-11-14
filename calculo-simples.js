var input =  require("fs").readFileSync("stdin", "utf8");

var linhas = input.split("\n")

var descriptionline1 = linhas.shift().split(" ");
var descriptionline2 = linhas.shift().split(" ");

var cod1 = descriptionline1.shift();
var qtd1 = descriptionline1.shift();
var valUn1 = descriptionline1.shift();

var total1 = qtd1 * valUn1;

var cod2 = descriptionline2.shift();
var qtd2 = descriptionline2.shift();
var valUn2 = descriptionline2.shift();

var total2 = qtd2 * valUn2;

var total = total1 + total2;

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));