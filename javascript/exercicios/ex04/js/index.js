function tabuada() {
    let num = parseInt(document.getElementById('numero').value);
    let tabuada = document.getElementById('tabuada');
    if (num.length == 0) {
        alert('Por favor digite um número !');
    } else {
        let c = 0;
        tabuada.innerHTML = '';

        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${num} x ${c} = ${num * c}`;
            tabuada.appendChild(item);
            c++
        }
    }
}