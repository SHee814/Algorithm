const input = require('fs').readFileSync(0, 'utf-8').toString().split('\n');
const codeMap = new Map([
    ['***\n* *\n* *\n* *\n***\n', 0],
    ['  *\n  *\n  *\n  *\n  *\n', 1],
    ['***\n  *\n***\n*  \n***\n', 2],
    ['***\n  *\n***\n  *\n***\n', 3],
    ['* *\n* *\n***\n  *\n  *\n', 4],
    ['***\n*  \n***\n  *\n***\n', 5],
    ['***\n*  \n***\n* *\n***\n', 6],
    ['***\n  *\n  *\n  *\n  *\n', 7],
    ['***\n* *\n***\n* *\n***\n', 8],
    ['***\n* *\n***\n  *\n***\n', 9],
]);

const rowLength = input[0].length;
let totalCode = '';
let rowIndex = 0;

while (rowIndex < rowLength) {
    let code = '';
    
    for (let r = 0; r < 5; r++) {
        const row = input[r];
        
        for (let i = 0; i < 3; i++) {
            const index = rowIndex + i;
            
            code += row[index];
        }
        
        code += '\n';
    }
    
    rowIndex += 4;
    
    if (codeMap.has(code)) {
        totalCode += codeMap.get(code);
    } else {
        console.log('BOOM!!');
        process.exit();
    }
}

if ((+totalCode % 6) === 0) {
    console.log('BEER!!');
} else {
    console.log('BOOM!!');
}