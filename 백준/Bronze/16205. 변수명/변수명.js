const fs = require('fs');
const [C, V] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');
let v = V;

if (C === '1' || C === '3') {
    v = parseCamelPascalCase(v);
} else {
    v = parseSnakeCase(v);
}

console.log(`${toCamelCase(v)}\n${toSnakeCase(v)}\n${toPascalCase(v)}`);

function toCamelCase(v) {
    return v.map((x, i) => i === 0 ? x : x[0].toUpperCase() + x.slice(1)).join('');
}

function toSnakeCase(v) {
    return v.join('_');
}

function toPascalCase(v) {
    return v.map((x, i) => x[0].toUpperCase() + x.slice(1)).join('');
}

function parseSnakeCase(v) {
    return v.split('_').map(x => x.toLowerCase());
}

function parseCamelPascalCase(v) {
    const result = [];
    let sp = '';
    
    for (let i = 0; i < v.length; i++) {
        if (v[i].toUpperCase() === v[i]) {
            if (sp.length > 0) result.push(sp);
            
            sp = v[i].toLowerCase();
        } else {
            sp += v[i].toLowerCase();
        }
    }
    
    result.push(sp);
    
    return result;
}