const limit = 10_000;
const numbers = new Array(limit).fill(false);
let answer = ``;

for (let i = 1; i <= limit; i++) {
    if (!numbers[i - 1]) {
        answer += `${i}\n`;
    }
    
    const num_splited = i.toString().split('');
    const nextNumber = (+i) + num_splited.reduce((acc, x) => acc + (+x), 0);
    
    numbers[nextNumber - 1] = true;
}

console.log(answer);