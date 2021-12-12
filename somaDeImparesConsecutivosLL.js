var input =  require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
var n = lines.shift().split(" ");

    for (var i = 1; i <= n; i++){
		var soma = 0;
		var valores = lines.shift().split(" ");
        var x = parseFloat(valores.shift());
        var y = valores.shift();
		if (y > x){
			while (y > x){
				y--;
				if ((y%2 == 1) && (y != x)){
					soma = soma + y;
				}
			}
		}else if (x > y){
			while (x > y){
				x--;
				if ((x%2 == 1) && (x != y)){
					soma = soma + x;
				}
			}
		}
		console.log(soma);
	}