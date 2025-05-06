/**
 operadores de comparação
    * == igual a
    * === estritamente igual a
    * != diferente de  
    * !== estritamente diferente de
    * > maior que
    * < menor que
    * >= maior ou igual a
    * <= menor ou igual a
    * && e lógico
    * || ou lógico
    * ! negação lógica
    * ?? operador de coalescência nula (nullish coalescing operator) - retorna o operando à esquerda se ele não for null ou undefined, caso contrário, retorna o operando à direita.
    * ??= operador de atribuição de coalescência nula (nullish coalescing assignment operator) - atribui o valor à esquerda se o valor à direita for null ou undefined.
    * 
 */

 console.log(10 == 10); // true porque 10 é igual a 10
 console.log(10 == '10'); // true porque '10' é convertido para número
 console.log(10 === 10); // true porque 10 é estritamente igual a 10        
    console.log(10 === 10); // true porque 10 é estritamente igual a 10
    console.log(10 === '10'); // false porque '10' não é estritamente igual a 10
    console.log(10 != 10); // false porque 10 não é diferente de 10
    console.log(10 != '10'); // false porque '10' é convertido para número e não é diferente de 10
    console.log(10 !== 10); // false porque 10 não é estritamente diferente de 10
    console.log(10 !== '10'); // true porque '10' não é estritamente diferente de 10
    console.log(10 > 5); // true porque 10 é maior que 5
    console.log(10 < 5); // false porque 10 não é menor que 5
    console.log(10 >= 10); // true porque 10 é maior ou igual a 10
    console.log(10 <= 10); // true porque 10 é menor ou igual a 10
    console.log(10 > 5 && 5 < 10); // true porque ambas as condições são verdadeiras
    console.log(10 > 5 || 5 > 10); // true porque uma das condições é verdadeira
    console.log(!(10 > 5)); // false porque 10 é maior que 5 e a negação torna falso
    console.log(10 ?? 5); // 10 porque 10 não é null ou undefined
    console.log(null ?? 5); // 5 porque null é null ou undefined
    console.log(undefined ?? 5); // 5 porque undefined é null ou undefined
    console.log(10 ??= 5); // 10 porque 10 não é null ou undefined
    console.log(null ??= 5); // 5 porque null é null ou undefined
    console.log(undefined ??= 5); // 5 porque undefined é null ou undefined
    

    // Valor booleano é um valor que pode ser verdadeiro (true) ou falso (false).
    // Valores falsy são valores que são considerados falsos quando avaliados em um contexto booleano. Os valores falsy em JavaScript incluem:  

    // 0 (zero), "", null, undefined, NaN (Not a Number), false.
    // Valores truthy são valores que são considerados verdadeiros quando avaliados em um contexto booleano. Os valores truthy em JavaScript incluem:

    // Qualquer número diferente de zero, strings não vazias, objetos, arrays, funções e o valor true.
    // Exemplo de valores falsy e truthy:

    console.log(0 == false); // true porque 0 é considerado falsy
    console.log(1 == true); // true porque 1 é considerado truthy
    console.log('' == false); // true porque '' é considerado falsy
    console.log(' ' == true); // false porque ' ' é considerado truthy
    console.log('a' == true); // false porque 'a' é considerado truthy
    console.log(null == false); // false porque null é considerado falsy
    console.log(undefined == false); // false porque undefined é considerado falsy
    console.log(NaN == false); // false porque NaN é considerado falsy
    console.log({} == false); // false porque {} é considerado truthy
    console.log([] == false); // true porque [] é considerado falsy
    console.log([1] == true); // true porque [1] é considerado truthy
    console.log([0] == false); // true porque [0] é considerado falsy
    console.log([1, 2] == true); // false porque [1, 2] é considerado truthy
    console.log([1, 2] == false); // false porque [1, 2] é considerado truthy
    console.log([1, 2] == true); // false porque [1, 2] é considerado truthy
    console.log([1, 2] == false); // false porque [1, 2] é considerado truthy

    const num1 = 10; // número 10
    const num2 = 20; // número 20
    const comp = num1 == num2; // comparação entre num1 e num2
    console.log(comp); // false porque 10 não é igual a 20


    const comp2 = num1 === num2; // comparação estrita entre num1 e num2
    console.log(comp2); // false porque 10 não é estritamente igual a 20

    const comp3 = num1 != num2; // comparação diferente entre num1 e num2
    console.log(comp3); // true porque 10 é diferente de 20

    const comp4 = num1 !== num2; // comparação estritamente diferente entre num1 e num2

    console.log(comp4); // true porque 10 é estritamente diferente de 20

    const comp5 = num1 > num2; // comparação maior que entre num1 e num2
    console.log(comp5); // false porque 10 não é maior que 20

    const comp6 = num1 < num2; // comparação menor que entre num1 e num2
    console.log(comp6); // true porque 10 é menor que 20

    const comp7 = num1 >= num2; // comparação maior ou igual a entre num1 e num2
    console.log(comp7); // false porque 10 não é maior ou igual a 20

    const comp8 = num1 <= num2; // comparação menor ou igual a entre num1 e num2
    console.log(comp8); // true porque 10 é menor ou igual a 20

    const comp9 = num1 && num2; // comparação lógica E entre num1 e num2
    console.log(comp9); // 20 porque ambos os números são verdadeiros (truthy)

    const comp10 = num1 || num2; // comparação lógica OU entre num1 e num2
    console.log(comp10); // 10 porque ambos os números são verdadeiros (truthy)

    