var input =  require("fs").readFileSync("stdin", "utf8");

var valor = parseInt(input);

var qtdCem = parseInt(valor/100);
var qtdCinquenta = parseInt(valor%100/50);
var qtdVinte = parseInt(valor%100%50/20);
var qtdDez = parseInt(valor%100%50%20/10);
var qtdCinco = parseInt(valor%100%50%20%10/5);
var qtdDois = parseInt(valor%100%50%20%10%5/2);
var qtdUm = parseInt(valor%100%50%20%10%5%2);

console.log(valor)
console.log(qtdCem + " nota(s) de R$ 100,00")
console.log(qtdCinquenta + " nota(s) de R$ 50,00")
console.log(qtdVinte + " nota(s) de R$ 20,00")
console.log(qtdDez + " nota(s) de R$ 10,00")
console.log(qtdCinco + " nota(s) de R$ 5,00")
console.log(qtdDois + " nota(s) de R$ 2,00")
console.log(qtdUm + " nota(s) de R$ 1,00")
