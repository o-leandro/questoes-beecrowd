var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
 let [X, Y] = lines[i].split(" ").map((item) => parseInt(item));
 if (Y === 0) {
 console.log("divisao impossivel");
 } else {
 let resultado = (X / Y).toFixed(1);
 console.log(resultado);
 }
}
