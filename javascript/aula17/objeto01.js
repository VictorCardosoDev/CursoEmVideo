let amigo = {
    nome: 'Victor',
    idade: 20,
    peso: 50.5,
    engordar(p) {
        this.peso += p;
    }
}

console.log(amigo);

console.log(`\n${amigo.nome} pesa ${amigo.peso}`);
amigo.engordar(1.3);
console.log(`\nApós a feijoada o peso dele foi para: ${amigo.peso}\n`);

console.log(typeof amigo);