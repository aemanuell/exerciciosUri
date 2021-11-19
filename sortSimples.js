var input =  require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ");

var val1 = parseInt(valores.shift());
var val2 = parseInt(valores.shift());
var val3 = parseInt(valores.shift());

var primeiroAux = (val1+val2+Math.abs(val1-val2))/2;
var menoraux = 0;

if(primeiroAux === val1){
    menoraux = val2;
} else {
    menoraux = val1;
}

var primeiro = (primeiroAux + val3 + Math.abs(primeiroAux-val3))/2;

if(primeiro === primeiroAux){
    menorauxAB = val3;
} else {
    menorauxAB = primeiroAux;
}

var segundo = (menoraux + menorauxAB + Math.abs(menoraux - menorauxAB))/2;

var terceiro = 0;

if (segundo === menorauxAB){
    terceiro = menoraux;
} else {
    terceiro = menorauxAB;
}

console.log(terceiro)
console.log(segundo)
console.log(primeiro)
console.log()
console.log(val1)
console.log(val2)
console.log(val3)