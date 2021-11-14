var input =  require("fs").readFileSync("stdin", "utf8");

var r = parseFloat(input)

var pi = 3.14159

volume = (4/3.0)*pi*(r**3)

console.log("VOLUME = " + volume.toFixed(3))