var input =  require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var i = 1;
var media = 0;
var cont = 0;
while(i<=6){
    var num = parseFloat(valores.shift());
    if (num > 0){
        cont++;
        media += num;
    }
    i++;
}

console.log(cont + " valores positivos");
console.log((media/cont).toFixed(1));