var input =  require("fs").readFileSync("stdin", "utf8");

var line = input.split("\n")

var vals1 = line.shift().split(" ");

var N1 = parseFloat(vals1.shift());
var N2 = parseFloat(vals1.shift());
var N3 = parseFloat(vals1.shift());
var N4 = parseFloat(vals1.shift());

var media = (2*N1+3*N2+4*N3+N4)/10;
console.log("Media: " + media.toFixed(1));

if(media >= 7){
    console.log("Aluno aprovado.");
} else if(media < 5){
    console.log("Aluno reprovado.");
} else if(media >= 5 && media <= 6.9){
    console.log("Aluno em exame.");
    var val2 = line.shift().split(" ");
    var notaExame = parseFloat(val2.shift());
    console.log("Nota do exame: " + notaExame.toFixed(1));
    mediaFinal = (media + notaExame)/2;
    if(mediaFinal >= 5){
        console.log("Aluno aprovado.");
    } else if (mediaFinal < 5){
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + mediaFinal.toFixed(1));
}