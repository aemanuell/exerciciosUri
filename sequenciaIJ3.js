var input =  require("fs").readFileSync("stdin", "utf8");

var z = 7;

for (var i = 1; i <= 10; i+=2){
    for (var j = z; j >= (z-2); j--){
        console.log("I="+ i + " J="+j);
    }
    z+=2;
}