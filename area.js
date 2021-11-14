var input =  require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ")

var A = parseFloat(valores.shift())
var B = parseFloat(valores.shift())
var C = parseFloat(valores.shift())

var pi = 3.14159

var areaTriangulo = (A*C)/2
var areaCirculo = pi * (C**2)
var areaTrapezio = ((A+B)*C)/2
var areaQuadrado = B**2
var areaRetangulo = A*B

console.log("TRIANGULO: " + areaTriangulo.toFixed(3))
console.log("CIRCULO: " + areaCirculo.toFixed(3))
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3))
console.log("QUADRADO: " + areaQuadrado.toFixed(3))
console.log("RETANGULO: " + areaRetangulo.toFixed(3))