var input =  require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n")

var line1 = lines.shift();
var line2 = lines.shift();
var line3 = lines.shift();

if (line1 === "vertebrado" && line2 === "ave" && line3 === "carnivoro"){
    console.log("aguia");
}

if (line1 === "vertebrado" && line2 === "ave" && line3 === "onivoro"){
    console.log("pomba");
}

if (line1 === "vertebrado" && line2 === "mamifero" && line3 === "onivoro"){
    console.log("homem");
}

if (line1 === "vertebrado" && line2 === "mamifero" && line3 === "herbivoro"){
    console.log("vaca");
}

if (line1 == "invertebrado" && line2 == "inseto" && line3 == "hematofago"){
    console.log("pulga");
}

if (line1 == "invertebrado" && line2 == "inseto" && line3 == "herbivoro"){
    console.log("lagarta");
}

if (line1 == "invertebrado" && line2 == "anelideo" && line3 == "hematofago"){
    console.log("sanguessuga");
}

if (line1 == "invertebrado" && line2 == "anelideo" && line3 == "onivoro"){
    console.log("minhoca");
}