//condição aninhada;

var agr = new Date();

var hora = agr.getHours();
console.log(`Agora são exatamente ${hora} horas`);

if (hora < 6 && hora > 0) {
    console.log('Boa madrugada!');
} else if (hora < 12) {
    console.log('Bom dia!');

} else if (hora < 18) {
    console.log('Boa tarde!');

} else if (hora > 18 && hora <= 24) {
    console.log('Boa noite!');
} else {
    console.log('Esse horário não é válido!');
}