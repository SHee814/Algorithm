const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

if (input === 'fdsajkl;' || input === 'jkl;fdsa') {
    console.log('in-out');
} else if (input === 'asdf;lkj' || input === ';lkjasdf') {
    console.log('out-in');
} else if (input === 'asdfjkl;') {
    console.log('stairs');
} else if (input === ";lkjfdsa") {
    console.log('reverse');
} else {
    console.log('molu');
}