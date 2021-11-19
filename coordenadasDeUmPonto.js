var input =  require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ");

var X = parseFloat(valores.shift());
var Y = parseFloat(valores.shift());

if(X>0 && Y>0){
    console.log("Q1")
} else if(X<0 && Y>0){
    console.log("Q2")
} else if(X<0 && Y<0){
    console.log("Q3")
} else if(X>0 && Y<0){
    console.log("Q4")
} else if(X===0 && Y===0){
    console.log("Origem")
} else if(X===0){
    console.log("Eixo Y")
} else if (Y===0){
    console.log("Eixo X")
} 