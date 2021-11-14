var input =  require("fs").readFileSync("stdin", "utf8");
var linhas = input.split("\n")

var nome = linhas.shift();
var salarioFixo = parseFloat(linhas.shift());
var totalVendas = parseFloat(linhas.shift());

var comissao = totalVendas * 0.15;

var salarioFinal = salarioFixo + comissao;

console.log("TOTAL = R$ " + salarioFinal.toFixed(2));