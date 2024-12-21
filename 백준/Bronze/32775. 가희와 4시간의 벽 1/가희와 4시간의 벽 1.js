const [S, F] = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

if (S > F) {
    console.log("flight");
} else {
    console.log("high speed rail");
}