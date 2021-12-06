var input =  require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

i = 1;
var cont = 0;
while(i<=6){
    var num = parseFloat(valores.shift());
    if (num > 0){
        cont++;
    }
    i++;
}

console.log(cont + " valores positivos");
