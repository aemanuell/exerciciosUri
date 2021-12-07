var input =  require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var x = parseInt(valores.shift());
var y = parseInt(valores.shift());
var soma = 0;
if (y > x){
    while (y > x){
        x++;
        if (((x%2 == 1) && (y != x)) || ((x%2 == -1) && (x!=y))){
            soma = soma + x;
        }
    }
}else if (x > y){
    while (x > y){
        y++;
        if (((y%2 == 1) && (x != y)) || ((y%2 == -1) && (x!=y))){
            soma = soma + y;
        }
    }
}
console.log(soma);