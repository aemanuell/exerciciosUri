var input =  require("fs").readFileSync("stdin", "utf8");
var n = parseInt(input);

for(var i=2; i<=n; i+=2){
    console.log(i + "^2" + " = " + i*i);
}