console.log( 'Carla Correia');
console.log( 'Carla "Correia"');
console.log( 'Carla \'Correia\'');
console.log( "Carla Correia");
console.log( "Carla \"Correia\"");
console.log( "Carla 'Correia'");
console.log( `Carla Correia`);
console.log( `Carla "Correia"`);
console.log( `Carla 'Correia'`);
/*
1. console.log( 'Carla Correia');
Usa aspas simples.
Exibe: Carla Correia

2. console.log( 'Carla "Correia"');
Usa aspas simples.
Exibe: Carla "Correia"

 3. console.log( 'Carla \'Correia\'');
Usa aspas simples por fora, e dentro usa caractere de escape \ para que as aspas simples internas não fechem a string.
Exibe: Carla 'Correia'

 4. console.log( "Carla Correia");
Aspas duplas, string simples.
Exibe: Carla Correia

5. console.log( "Carla \"Correia\"");
Aspas duplas por fora, e escapa as aspas duplas internas com \".
Exibe: Carla "Correia"
6. console.log( "Carla 'Correia'");
Aspas duplas por fora e aspas simples dentro, permitido sem necessidade de escape.

Exibe: Carla 'Correia'

7. console.log( \Carla Correia`);`
Usa template string (crase `).
Exibe: Carla Correia
Com template strings, você pode inserir variáveis ou expressões assim:

const nome = "Carla";
console.log(`Bem-vinda, ${nome}`);

8. console.log( \Carla "Correia"`);`
Permite aspas duplas dentro da crase, sem problema.
Exibe: Carla "Correia"

9. console.log( \Carla 'Correia'`);`
Também permite aspas simples.
Exibe: Carla 'Correia'
*/

console.log(123456, 123456.789, 123456.7890123456789);
// O número inteiro é exibido como está, sem formatação.
// O ponto separa os números decimais, e a vírgula separa os milhares.
// O número decimal é exibido com 3 casas decimais, arredondando o último dígito.

/*
String: texto, aspas simples ou duplas, crase.
Number: número, inteiro ou decimal.
Boolean: verdadeiro ou falso.
Null: valor nulo, sem valor.
Undefined: variável não definida, sem valor atribuído.
Symbol: valor único e imutável, usado como identificador.
BigInt: número inteiro grande, maior que o limite do Number.
Object: coleção de propriedades e métodos, estrutura de dados complexa.
 */