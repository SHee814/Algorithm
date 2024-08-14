const N = +require('fs').readFileSync(0, 'utf-8');
const S = 'WelcomeToSMUPC';
const index = (N % S.length) || 14;
console.log(S[index - 1]);