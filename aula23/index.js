/*
&& -> E lógico - Se ambos os valores forem verdadeiros, o resultado será verdadeiro.
|| -> OU lógico - Se pelo menos um dos valores for verdadeiro, o resultado será verdadeiro.
 */

// console.log('Carla Correia' && true && NaN); // NaN é considerado falso em JavaScript, então o resultado será NaN
// console.log('Carla Correia' && true && 0); // 0 é considerado falso em JavaScript, então o resultado será 0
// console.log('Carla Correia' && true && ''); // '' é considerado falso em JavaScript, então o resultado será ''
// console.log('Carla Correia' && true && undefined); // undefined é considerado falso em JavaScript, então o resultado será undefined
// console.log('Carla Correia' && true && null); // null é considerado falso em JavaScript, então o resultado será null
// console.log('Carla Correia' && true && false); // false é considerado falso em JavaScript, então o resultado será false
// console.log('Carla Correia' && true && true); // true é considerado verdadeiro em JavaScript, então o resultado será true

function falaOi () {
    return 'Oi';
}

const vaiExecutar = false; // Se o valor for verdadeiro, a função será executada e o resultado será 'Oi'

console.log(vaiExecutar && falaOi()); // Se o valor for verdadeiro, a função será executada e o resultado será 'Oi'
console.log(vaiExecutar || falaOi()); // Se o valor for verdadeiro, a função será executada e o resultado será 'Oi'
