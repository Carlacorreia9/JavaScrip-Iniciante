// As string são indexadas, ou seja, cada letra tem um índice
// O índice começa em 0 1 2 3 4 5 6 7 8 9 10
// O índice negativo começa do final -1 -2 -3 -4 -5 -6 -7 -8 -9 -10

//const nome = 'Carla Correia';
//console.log(nome[0]); // C

// Os Arays são indexados, ou seja, cada elemento tem um índice
// O índice começa em 0 João  1 Maria 2 José 3 Ana 4 Pedro
// O índice negativo começa do final -1 Pedro -2 Ana -3 José -4 Maria -5 João
const alunos = ['João', 'Maria', 'José', 'Ana', 'Pedro'];
const removido = alunos.pop(); // Remove o último elemento do array e retorna o valor removido
console.log(removido); // ['João', 'Maria', 'José', 'Ana', 'Pedro']

console.log(alunos);

//alunos.unshift('Carlos'); // Adiciona o valor Carlos no início do array
//alunos.unshift('Carla'); // Adiciona o valor Carla no início do array

//console.log(alunos);
 
//alunos.push('Carlos'); // Adiciona o valor Carlos no final do array
//alunos.push('Carla'); // Adiciona o valor Carla no final do array

//console.log(alunos); // ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Carlos', 'Carla']


//console.log(alunos.length);// 5

//alunos[0] = 'Carlos'; // Altera o valor do índice 0
//alunos[6] = 'Carla'; // Altera o valor do índice 1
// Altera o valor do índice 0

//console.log(alunos);
//console.log(alunos[0]); // João
//console.log(alunos[1]); // Maria
//console.log(alunos[2]); // José