var input =  require("fs").readFileSync("stdin", "utf8");

var valor = parseFloat(input);

valor = valor*100

var qtdCem = parseInt(valor/10000);
var qtdCinquenta = parseInt(valor%10000/5000);
var qtdVinte = parseInt(valor%10000%5000/2000);
var qtdDez = parseInt(valor%10000%5000%2000/1000);
var qtdCinco = parseInt(valor%10000%5000%2000%1000/500);
var qtdDois = parseInt(valor%10000%5000%2000%1000%500/200);

var qtdUm = parseInt(valor%10000%5000%2000%1000%500%200/100);
var qtdCinquentaCent = parseInt(valor%10000%5000%2000%1000%500%200%100/50);
var qtdVinteCinco = parseInt(valor%10000%5000%2000%1000%500%200%50/25);
var qtdDezCent = parseInt(valor%10000%5000%2000%1000%500%200%50%25/10);
var qtdCincoCent = parseInt(valor%10000%5000%2000%1000%500%200%50%25%10/5);
var qtdUmCent = parseInt(valor%10000%5000%2000%1000%500%200%50%25%10%5);

console.log("NOTAS:")
console.log(qtdCem + " nota(s) de R$ 100.00")
console.log(qtdCinquenta + " nota(s) de R$ 50.00")
console.log(qtdVinte + " nota(s) de R$ 20.00")
console.log(qtdDez + " nota(s) de R$ 10.00")
console.log(qtdCinco + " nota(s) de R$ 5.00")
console.log(qtdDois + " nota(s) de R$ 2.00")

console.log("MOEDAS:")
console.log(qtdUm + " moeda(s) de R$ 1.00")
console.log(qtdCinquentaCent + " moeda(s) de R$ 0.50")
console.log(qtdVinteCinco + " moeda(s) de R$ 0.25")
console.log(qtdDezCent + " moeda(s) de R$ 0.10")
console.log(qtdCincoCent + " moeda(s) de R$ 0.05")
console.log(qtdUmCent + " moeda(s) de R$ 0.01")