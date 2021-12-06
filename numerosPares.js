var input =  require("fs").readFileSync("stdin", "utf8");

var i = 2;

while(i<=100){
    if(i%2 == 0){
        console.log(i);
    }
    i++;
}