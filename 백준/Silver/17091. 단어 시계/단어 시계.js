const [H, M] = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const inWords = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quater",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
    30: "half"
};

const h = inWords[H];
const nh = inWords[((H + 1) % 12) || 12];

if (M === 0) {
    console.log(`${h} o' clock`);
} else if (M === 30) {
    console.log(`half past ${h}`);
} else if (M === 15) {
    console.log(`quarter past ${h}`);
} else if (M === 45) {
    console.log(`quarter to ${nh}`);
} else if (M === 1) {
    console.log(`one minute past ${h}`);
} else if (M === 59) {
    console.log(`one minute to ${nh}`);
} else {
    const m = inWords[(M < 30) ? M : 60 - M];
    const p = (M < 30) ? 'past' : 'to';
    console.log(`${m} minutes ${p} ${(M < 30) ? h : nh}`);
}