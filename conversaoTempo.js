var input =  require("fs").readFileSync("stdin", "utf8");

var dur = parseInt(input);

var hour = parseInt(dur/3600);
var min = parseInt(dur%3600/60);
var seg = parseInt(dur%3600%60);

console.log(hour + ":" + min + ":" + seg)