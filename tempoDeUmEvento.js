var input =  require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var descriptionline1 = lines.shift().split("  ");
var descriptionline2 = lines.shift().split(" : ");
var descriptionline3 = lines.shift().split();
var descriptionline4 = lines.shift().split(" : ");

var dia_i = descriptionline1.shift();
var hora_i = parseInt(descriptionline2.shift());
var min_i = parseInt(descriptionline2.shift());
var seg_i = parseInt(descriptionline2.shift());
var dia_f = descriptionline3.shift();
var hora_f = parseInt(descriptionline4.shift());
var min_f = parseInt(descriptionline4.shift());
var seg_f = parseInt(descriptionline4.shift());
var seg_ti = 0;
var seg_tf = 0;
var aux1 = 0;
var dia = 0;
var hora = 0;
var min = 0;
var seg = 0;

// var dia_i = dia_i.split('').reverse('').join('');
// var dia_i = dia_i.split(' ',2);
// var dia_f = dia_f.split('').reverse('').join('');
// var dia_f = dia_f.split(' ',1);

var dia_i = dia_i.split('Dia ');
var dia_f = dia_f.split('Dia ');

// var dia_i = parseInt(dia_i);
// var dia_f = parseInt(dia_f);

  seg_ti = hora_i*3600 + min_i*60 + seg_i;
  seg_tf = hora_f*3600 + min_f*60 + seg_f;

  if (seg_tf < seg_ti) {
    dia_i = parseInt(dia_i[1]) + 1;
    dia = dia_f[1] - dia_i;
    aux1 = (86400 - seg_ti) + seg_tf;
    hora = aux1/3600;
    min = aux1%3600;
    min = min/60;
    seg = aux1%3600%60;
    console.log(parseInt(dia) + " dia(s)");
    console.log(parseInt(hora) + " hora(s)");
    console.log(parseInt(min) + " minuto(s)");
    console.log(parseInt(seg) + " segundo(s)");
  } else if ((seg_tf - seg_ti) !== 0){
      dia = dia_f[1] - dia_i[1]; 
      aux1 = seg_tf - seg_ti;
      hora = aux1/3600;
      min = aux1%3600;
      min = min/60;
      seg = aux1%3600%60;
      console.log(parseInt(dia) + " dia(s)");
      console.log(parseInt(hora) + " hora(s)");
      console.log(parseInt(min) + " minuto(s)");
      console.log(parseInt(seg) + " segundo(s)");
  } if ( seg_i === seg_f) {
    seg = 0;
    if (min_i === min_f){
      min = 0;
        if ( hora_f === hora_i){
          hora = 0;
          dia_i = parseInt(dia_i[1]) + 1;
          dia = dia_f[1] - dia_i;
          console.log(parseInt(dia) + " dia(s)");
          console.log(parseInt(hora) + " hora(s)");
          console.log(parseInt(min) + " minuto(s)");
          console.log(parseInt(seg) + " segundo(s)");
      }
    }
  }