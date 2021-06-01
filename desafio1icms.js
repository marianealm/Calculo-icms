// Desafio Calculo do IMC
const nome = 'Carlos';
const peso = 89;
const altura = 1.50;
const sexo = 'Masculino';
const imc = peso /(altura * altura);


// forma 1 
// if (imc >= 30) {console.log ('voce esta acima do peso') }
//if (imc < 29.9) {console.log ('voce nao esta acima do peso')}

//forma 2

let message = "";

if (imc >= 30) {message = `${nome} voce está acima do peso`}
else {message = `${nome} voce não está acima do peso`}

console.log(message)