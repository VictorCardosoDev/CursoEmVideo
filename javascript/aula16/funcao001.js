function parimp (n) {
    if (n % 2 == 0) {
        return 'par';
    } else {
        return 'Ímpar';
    }
}

let res = parimp(6);

console.log(res);