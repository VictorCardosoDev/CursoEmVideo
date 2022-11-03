const { isNumber } = require("util");

let num = parseInt(document.getElementById('numero').value);
let tabela = document.getElementById('tabela');
let valores = [];

function adicionar() {
    if (isNumero(num) && !inLista(num, valores)) {

    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}

function finalizar() {
    let itens = document.querySelector('select');
    if (itens.length == 0) {
        alert('Não existe item')
    }
}