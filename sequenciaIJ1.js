var input =  require("fs").readFileSync("stdin", "utf8");

var i = 1;
var j = 60;

while(j>= 0){
    console.log("I="+ i + " J="+j);
    i+=3;
    j-=5;
}