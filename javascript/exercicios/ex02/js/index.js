function verificar() {
    let date = new Date();
    let anoHoje = date.getFullYear(); 

    let year = parseInt(document.getElementById('ano').value);

    let sexo = document.getElementsByName('sexo');

    let res = document.querySelector('p.txt');

    if (year.length == 0) {
        alert(`[ERRO] Por favor coloque algum ano!`);
    } else if (year > anoHoje) {
        alert(`[ERRO] O ano digitado ( "${year}" ) é maior que o ano atual !`);
    } else {

        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        let idade = anoHoje - year;
        genero = '';
        
        if (sexo[0].checked) {
            genero = 'Mulher';
            if (idade > 0 && idade < 60) {
                img.setAttribute('src', 'mulher.jpg');
            } else if (idade >= 60) {
                img.setAttribute('src', 'senhora.jpg');
            }
        } else {
            genero = 'Homem';
            if(idade > 0 && idade < 60) {
                img.setAttribute('src', 'homem.jpg');
            } else if (idade >= 60) {
                img.setAttribute('src', 'senhor.jpg');
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img)
    }
}