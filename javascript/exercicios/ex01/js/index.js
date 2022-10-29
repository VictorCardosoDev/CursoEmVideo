function carregar () {
    
    let date = new Date();
    let hora = date.getHours();

    let principal = document.getElementById('principal');

    let img = document.getElementById('imagem');

    let info = document.getElementById('info-hora').innerHTML = `${hora} horas`;


    if (hora >= 18 && hora <= 24 || hora >= 00 && hora < 6) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        principal.style.color = 'black';
        img.style.backgroundImage = 'url(noite.jpg)';

    } else if (hora < 12) {
        document.body.style.backgroundColor = 'orange';
        img.style.backgroundImage = 'url(manha.jpg)';

    } else if (hora < 18 ) {
        document.body.style.backgroundColor = 'blue';
        img.style.backgroundImage = 'url(tarde.jpg)';
    }

}