let a = '*';
let b = '##'

for (let i = 0; i < 12; i++) {
    if (i % 2 == 0) {
        console.log(a);
        a += '**';
    } else {
        console.log(b);
        b += '##';
    };
};