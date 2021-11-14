var input =  require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var vals1 = lines.shift().split(" ");
var vals2 = lines.shift().split(" ");

var x1 = vals1.shift();
var y1 = vals1.shift();

var x2 = vals2.shift();
var y2 = vals2.shift();

var dist = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));

console.log(dist.toFixed(4));