var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i=0;
let vetor = new Array(100);

do
{
 vetor[i]=parseFloat(lines.shift());
 i++;
} while (i < 100);
for (let p = 0; p < vetor.length; p++)
{
 if(vetor[p] <= 10){
 console.log(`A[${p}] = ${vetor[p].toFixed(1)}`);
 }
}