var input =  require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

if (A < B) {
    aux = A;
    A = B;
    B = aux;
}

if (B < C){
    aux = B;
    B = C;
    C = aux;
}

if (A < B){
    aux = A;
    A = B;
    B = aux;
}

if(A >= (B+C)){
    console.log("NAO FORMA TRIANGULO")
} else if((A*A) === (B*B+C*C)){
    console.log("TRIANGULO RETANGULO")
} else if((A*A) > (B*B+C*C)){
    console.log("TRIANGULO OBTUSANGULO")
} else if((A*A) < (B*B+C*C)){
    console.log("TRIANGULO ACUTANGULO")
} if(A===B && B===C){
    console.log("TRIANGULO EQUILATERO")
} if((A===B && B!==C) || (A!==B && B===C) || (A===C && B!==C)) {
    console.log("TRIANGULO ISOSCELES")
}