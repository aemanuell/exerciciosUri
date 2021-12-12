var input =  require("fs").readFileSync("stdin", "utf8");

for(var i = 1; i <= 10; i += 2){
    for(var j = 7; j >= 5; j--){
        console.log("I="+ i + " J="+j);
    }
}