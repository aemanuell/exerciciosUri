var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var val = parseInt(input);

for(var i=1; i <= val; i+=2){
    console.log(i)
}
