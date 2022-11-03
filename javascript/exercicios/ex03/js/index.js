function contar() {
    let ini = parseInt(document.getElementById('inicio').value);
    let fim = parseInt(document.getElementById('fim').value);
    let passo = parseInt(document.getElementById('passo').value);
    let res = document.getElementById('res');

    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {
        alert('[ERRO] Faltam dados!');
    } else {
       res.innerHTML = 'Contando:<br> '
       
       if (passo <= 0) {
        alert('Passo inválido! Considerando PASSO 1');
        passo = 1;
       }

       if (ini < fim) {
        for (let c = ini; c <= fim; c += passo) {
            res.innerHTML += `${c} `;
        }
       } else {
        for (let c = ini; c >= fim; c -= passo) {
            res.innerHTML += `${c} `;
        }
       }
        
    }
}