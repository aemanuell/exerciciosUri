var input =  require("fs").readFileSync("stdin", "utf8");
var n = parseInt(input);

for(var i = 1; i <= 10000; i++){
    if(i%n == 2){
        console.log(i)
    }
}