// calculo de aposentadoria
const nome = 'Silvana';
const sexo = 'F';
const idade = 60;
const contribuição = 30;

const calculocontribuição = (idade + contribuição);

const homempodeaposentar = sexo == 'M' && contribuição >= 35 && calculocontribuição >= 95
const mulherpodeaposentar = sexo == 'F' && contribuição >= 30 && calculocontribuição >=85

if (homempodeaposentar || mulherpodeaposentar){console.log (`${nome}, você pode se aposentar!`)}
else {console.log (`${nome}, você não pode se aposentar!`)}
