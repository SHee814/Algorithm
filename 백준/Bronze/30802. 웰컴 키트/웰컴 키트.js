const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = +input[0];
const shirt = input[1].split(' ').map(Number);
const [T, P] = input[2].split(' ').map(Number);
const packT = shirt.reduce((acc, x) => acc + Math.ceil(x / T), 0);
const packP = Math.floor(N / P);
const eachP = N % P;
console.log(`${packT}\n${packP} ${eachP}`);