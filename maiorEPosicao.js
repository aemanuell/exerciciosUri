var input =  require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");
var maior = 0;
var pos = 0;
for(var i = 1; i <= 100; i++){
    var num = parseInt(valores.shift());
    if(num > maior){
        maior = num;
        pos = i;
    }

}

console.log(maior)
console.log(pos)