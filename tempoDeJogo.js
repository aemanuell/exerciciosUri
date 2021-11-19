var input =  require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ");

var inicio = parseInt(valores.shift());
var fim = parseInt(valores.shift());

if (inicio > fim) {
    24 - inicio + fim
    var duracao = 24 - inicio + fim;
} else {
    var duracao = fim - inicio;
}

if(inicio === fim){
    duracao = 24
}

console.log("O JOGO DUROU " + duracao + " HORA(S)")