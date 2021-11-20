var input =  require("fs").readFileSync("stdin", "utf8");

var salary = parseFloat(input);

if((salary>=0)&&(salary<=2000)) {
        console.log("Isento")
} else {
    if((salary>=2000.01)&&(salary<=3000)) {
        salary=((salary - 2000)*0.08);
        console.log("R$ " + salary.toFixed(2))
    } else {
        if((salary>=3000.01)&&(salary<=4500)) {
            salary=((salary-3000)*0.18)+80;
            console.log("R$ " + salary.toFixed(2))
        }
        if(salary>4500){
            salary=(((salary-4500)*0.28)+350);
            console.log("R$ " + salary.toFixed(2))
        }
    }
}