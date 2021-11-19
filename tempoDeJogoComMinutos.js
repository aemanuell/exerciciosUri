var input =  require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ");

var horaInicio = parseInt(valores.shift());
var minutoInicio = parseInt(valores.shift());
var horaFim = parseInt(valores.shift());
var minutoFim = parseInt(valores.shift());

if(horaInicio > horaFim) {
    var duracao = 1440 - (horaInicio*60+minutoInicio) + (horaFim*60 + minutoFim);
    var hora = parseInt(duracao/60);
    var minuto = parseInt(duracao%60);
} else {
    var duracao = (horaFim*60 + minutoFim) - (horaInicio*60+minutoInicio);
    var hora = parseInt(duracao/60);
    var minuto = parseInt(duracao%60);
}

if(horaFim === horaInicio){
    if(minutoInicio > minutoFim){
        var minuto = 60 - minutoInicio + minutoFim;
        var hora = 23;
    }else {
        var minuto = minutoFim - minutoInicio;
        var hora = 0;
    }
}

if((horaFim*60 + minutoFim) === (horaInicio*60+minutoInicio)){
    hora = 24;
    minuto = 0;
}

console.log("O JOGO DUROU " + hora + " HORA(S) E " + minuto + " MINUTO(S)");