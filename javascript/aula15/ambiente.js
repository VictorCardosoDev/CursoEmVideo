let num = [5, 9, 4, 5, 8, 9, 7, 1, 3, 4, 7, 5, 4];

console.log(num[1]);

num.push(3);

console.log(num);

for (pos = 0; pos < num.length; pos++) {
    console.log(num[pos]);
}

console.log(num.length);

console.log(num.sort());