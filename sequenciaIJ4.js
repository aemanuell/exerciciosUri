var input =  require("fs").readFileSync("stdin", "utf8");

var c=1,d=3,j,f, x;
x = parseInt(x);
    for(var i=0; i<=1.9; i=i+.2){
        for(var b=1.0; b<=3.0; b++){
            j=b+i;
            if(i==0.0||i==1.0){
                console.log("I="+ i.toFixed(0) + " J="+j.toFixed(0));
            }
            else if(j==3.0||j==4.0||j==5.0){
                console.log("I="+ i.toFixed(0) + " J="+j.toFixed(0));
            }
            else {
                console.log("I="+ i.toFixed(1) + " J="+j.toFixed(1));
            }
        }
    }
    for(x=3; x<=5; x++){
        console.log("I=2" + " J="+x);
    }