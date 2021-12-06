var input =  require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var i = 1;
var cont1 = 0;
var cont2 = 0;
var cont3 = 0;
var cont4 = 0;
while(i<=5){
    var num = parseInt(valores.shift());
    if ((num%2) === 0){
        cont1++;
    } else if((num%2) != 0) {
        cont2++;
    }
    if(num > 0){
        cont3++;
    } else if(num < 0) {
        cont4++;
    }
    i++;
}

console.log(cont1 + " valor(es) par(es)");
console.log(cont2 + " valor(es) impar(es)");
console.log(cont3 + " valor(es) positivo(s)");
console.log(cont4 + " valor(es) negativo(s)");
