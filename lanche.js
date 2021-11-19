var input =  require("fs").readFileSync("stdin", "utf8");

var line = input.split(" ");

var cod = parseInt(line.shift().split());
var qtd = parseInt(line.shift().split());

if(cod === 1){
    var total = qtd * 4.00;
} else if(cod === 2){
    var total = qtd * 4.50;
} else if(cod === 3){
    var total = qtd * 5.00;
} else if(cod === 4){
    var total = qtd * 2.00;
} else if(cod === 5){
    var total = qtd * 1.50;
}

console.log("Total: R$ " + total.toFixed(2));