var input =  require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");
var n = parseInt(input);
var j = 1;
var k = -1;   
for (var i = 1; i <= n; i++){
    var num = parseInt(valores.shift());
    if((num >= 10) && (num <= 20)){
        j++;
    }else if(num<10 || num>20){
        k++;
    }
}
console.log(j + " in")
console.log(k + " out")