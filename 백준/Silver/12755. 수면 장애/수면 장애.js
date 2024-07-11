const N = +require('fs').readFileSync(0, 'utf-8').toString();
let n = 1;
let count = 0;

while (count < N) {
    count += n.toString().length;
    n++;
}

const diff = count - N;
const string_n = (n - 1).toString();
const index_N = (string_n.length - 1) - diff;
const result = string_n[index_N];
console.log(result);