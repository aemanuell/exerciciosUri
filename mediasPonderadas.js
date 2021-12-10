var input =  require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
var n = lines.shift().split(" ");
var total = 0;



for(var i = 1; i <= n; i++){
    var valores = lines.shift().split(" ");
    var a = parseFloat(valores.shift());
    var b = parseFloat(valores.shift());
    var c = parseFloat(valores.shift());
    total = 2*a + 3*b + 5*c;
    console.log((total/10).toFixed(1));
}