var input =  require("fs").readFileSync("stdin", "utf8");

var salary = parseFloat(input);

if(salary >= 0 && salary <= 400){
    var increase = 0.15 * salary;
    var percentage = 15;
} else if(salary > 400 && salary <= 800){
    var increase = 0.12 * salary;
    var percentage = 12;
} else if(salary > 800 && salary <= 1200){
    var increase = 0.10 * salary;
    var percentage = 10;
} else if(salary > 1200 && salary <= 2000){
    var increase = 0.07 * salary;
    var percentage = 7;
} else if(salary > 2000){
    var increase = 0.04 * salary;
    var percentage = 4;
}

salary = salary + increase;

console.log("Novo salario: " + salary.toFixed(2));
console.log("Reajuste ganho: " + increase.toFixed(2));
console.log("Em percentual: " + percentage + " %");