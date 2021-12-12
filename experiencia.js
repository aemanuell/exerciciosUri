var input =  require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
var n = lines.shift().split(" ");
var totalCobaias = 0;
var totalCoelhos = 0;
var totalRatos = 0;
var totalSapos = 0;
var percentualCoelhos = 0;
var percentualRatos = 0;
var percentualSapos = 0;


for(var i = 1; i <= n; i++){
    var valores = lines.shift().split(" ");
    var qtd = parseFloat(valores.shift());
    var type = valores.shift();
    if (type === 'C'){
        totalCoelhos += qtd;
    } else if (type === 'R'){
        totalRatos += qtd;
    } else if (type === 'S'){
        totalSapos += qtd;
    }
}

totalCobaias = totalCoelhos + totalRatos + totalSapos;

percentualCoelhos = parseFloat(totalCoelhos/totalCobaias)*100
percentualRatos = parseFloat(totalRatos/totalCobaias)*100
percentualSapos = parseFloat(totalSapos/totalCobaias)*100

console.log("Total: " + totalCobaias + " cobaias");
console.log("Total de coelhos: " + totalCoelhos);
console.log("Total de ratos: " + totalRatos);
console.log("Total de sapos: " + totalSapos);
console.log("Percentual de coelhos: " + percentualCoelhos.toFixed(2) + " %")
console.log("Percentual de ratos: " + percentualRatos.toFixed(2) + " %")
console.log("Percentual de sapos: " + percentualSapos.toFixed(2) + " %")