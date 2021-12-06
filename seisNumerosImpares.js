var input =  require("fs").readFileSync("stdin", "utf8");
var val = parseInt(input);

if(val%2 == 0){
    val = val-1;
    for (i = 2; i <= 12; i+=2){
        console.log(val+i);
    }
}else{
    for (i = 0; i <= 10; i+=2){
        console.log(val+i);
    }
}