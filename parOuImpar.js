var input =  require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");
var n = parseInt(valores.shift());
var x = 0;

for (var i = 1; i <= n; i++){
    var x = parseInt(valores.shift());
    if (x === 0){
        console.log("NULL");
    }
    else if ((x > 0) && (x%2 === 0)){
        console.log("EVEN POSITIVE");
    }
    else if ((x > 0) && (x%2 === 1)){
        console.log("ODD POSITIVE");
    }
    else if ((x < 0) && (x%2 === 0)){
        console.log("EVEN NEGATIVE");
    }
    else if ((x < 0) && (x%2 === -1)){
        console.log("ODD NEGATIVE");
    }
}