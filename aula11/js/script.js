//alert('Com a nossa mensagem de alerta!');
// alert é uma função que mostra uma mensagem de alerta na tela
// console.log é uma função que mostra uma mensagem no console do navegador
//console.log('Com a nossa mensagem de console!');

let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');
// prompt é uma função que mostra uma caixa de diálogo para o usuário digitar algo
// o que o usuário digitar vai ser armazenado na variável num1 e num2
//console.log(num1, num2);
//parseInt converte uma string em um número inteiro

num1 = Number(num1);
num2 = Number(num2);
// Number converte uma string em um número

const resultado = num1 + num2;
// resultado é uma variável que armazena a soma de num1 e num2

alert(`A soma de ${num1} e ${num2} é igual a ${resultado}`);
// alert mostra uma mensagem de alerta na tela com o resultado da soma
// a variável resultado é interpolada na string usando template literals
// template literals são strings que permitem interpolação de variáveis
// a string é delimitada por crase (`) em vez de aspas simples ou duplas
// o que permite usar ${} para interpolar variáveis
// o que é mais legível e fácil de entender


