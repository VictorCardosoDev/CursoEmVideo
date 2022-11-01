let valores = [5, 9, 7, 8, 2, 4, 1, 6]

for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

console.log(`\nO vetor tem ${valores.length} elementos!`);


for (let pos in valores) {
    console.log(`\nA posição ${pos} tem o valor ${valores[pos]}`);
}

console.log(`O valor 5 está na posição ${valores.indexOf(5)}`);
console.log(`O valor 2 está na posição ${valores.indexOf(2)}`);