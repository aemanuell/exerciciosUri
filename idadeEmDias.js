var input =  require("fs").readFileSync("stdin", "utf8");

var num = parseInt(input);

var years = parseInt(num/365);
var months = parseInt(num%365/30);
var days = parseInt(num%365%30);

console.log(years + " ano(s)")
console.log(months + " mes(es)")
console.log(days + " dia(s)")