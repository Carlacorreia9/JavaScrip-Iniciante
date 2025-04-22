/**
 Primitivos - String, Number, Boolean, undefined, null, Symbol
 Objetos - Array, Object, Function, Date, RegExp, Map, Set, WeakMap, WeakSet, Promise, etc.
 Valores copiados - String, Number, Boolean, undefined, null, Symbol, bigint (imutáveis)

 */

 //let a = 'A';
 //let b = a; // b é uma cópia do valor de a
// console.log(a, b); // A A

/**
 Referência (mutável) - Array, Object, Function, Date, RegExp, Map, Set, WeakMap, WeakSet, Promise, etc.
 Valor (imutável) - String, Number, Boolean, undefined, null, Symbol, bigint
 passados por referência (mutáveis) - Array, Object, Function, Date, RegExp, Map, Set, WeakMap, WeakSet, Promise, etc.
 passados por valor (imutáveis) - String, Number, Boolean, undefined, null, Symbol, bigint
 */

 let a = [1, 2, 3];
    let b = a; // b é uma referência ao mesmo objeto que a
// console.log(a, b); // [1, 2, 3] [1, 2, 3]
a.push
console.log(a , b); // true

b.pop(); // remove o último elemento do array b
console.log(a, b); // [1, 2] [1, 2]
 