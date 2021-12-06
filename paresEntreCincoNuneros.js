var input =  require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var i = 1;
var cont = 0;
while(i<=5){
    var num = parseInt(valores.shift());
    if ((num%2) === 0){
        cont++;
    }
    i++;
}

console.log(cont + " valores pares");