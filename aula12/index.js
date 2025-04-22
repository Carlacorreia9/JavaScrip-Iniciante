let varA = 'A'; // 'A' é uma string
let varB = 'B'; // 'B' é uma string
let varC = 'C'; // 'C' é uma string
// let é uma palavra-chave que declara uma variável com escopo de bloco 
// var é uma palavra-chave que declara uma variável com escopo de função ou global
// const é uma palavra-chave que declara uma variável constante, ou seja, seu valor não pode ser alterado   

varA = 'D'; // 'D' é uma string
varB = varC; // varB agora é igual a 'C'
varC = varA; // varC agora é igual a 'D'

console.log(varA, varB, varC); // 'D', 'C', 'D'
// console.log é uma função que mostra uma mensagem no console do navegador 
// console.log pode receber vários argumentos separados por vírgula
// o que vai mostrar os valores separados por vírgula no console
// console.log também pode receber um objeto como argumento
// o que vai mostrar o objeto no console
// o que é útil para debugar o código e ver o que está acontecendo


