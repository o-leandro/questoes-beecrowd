var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo = +lines.shift();
let calculo = tempo * 2;

console.log(`${calculo} minutos`);