// No exercício a seguir, você verá uma constante chamada de "altura" e depois modificada para "alturaEmCm", mais precisamente no seguinte trecho de código:

//const nome = 'Luiz Otávio';
//const sobrenome = 'Miranda';
//const idade = 30;
//const peso = 84;
//const alturaEmCm = 1.80; // <-- NESTE LOCAL
//Na verdade, este valor (1.80) está em metros, portanto, o nome da variável deveria ser "alturaEmM".

//Só vi isso na edição da aula, peço desculpas pelo erro.

//O código corrigido estará disponível após a aula.

//O ponto principal aqui é a coerência entre o nome da variável e o valor que ela representa. Nesse caso:

//const alturaEmCm = 1.80; // ❌ incorreto, porque o valor está em metros

//Correção ideal:
//Se o valor está em metros, o nome correto seria:

//const alturaEmM = 1.80;

const nome = 'Carla Correia'; // string
const sobrenome = 'Souza';
const idade = 35;
const peso = 60;
const alturaEmM = 1.60; // Valor agora representa metros corretamente

const imc = peso / (alturaEmM * alturaEmM); // fórmula do IMC
const anoNascimento = 2025 - idade; // supondo o ano atual como 2025

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM}m de altura e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

// O que é o IMC?
// O IMC (Índice de Massa Corporal) é uma medida utilizada para avaliar se uma pessoa está com o peso adequado em relação à sua altura. Ele é calculado dividindo o peso da pessoa (em quilogramas) pelo quadrado da altura (em metros).
// O resultado do IMC pode ser interpretado da seguinte forma:
//$ é considerado abaixo do peso (IMC < 18,5)
