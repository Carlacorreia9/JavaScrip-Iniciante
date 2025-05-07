const hora = 10;

if (hora < 12) {
  console.log("Bom dia!");
}else if (hora < 18) {
  console.log("Boa tarde!");    
}else if (hora < 24) {
    console.log("Boa noite!");
}else {
    console.log("Hora inválida!");
}


const dia = 2; // 0 - domingo, 1 - segunda, 2 - terça, 3 - quarta, 4 - quinta, 5 - sexta, 6 - sábado
const diaDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const diaAtual = diaDaSemana[dia];
console.log(`Hoje é ${diaAtual}`);




const horaAtual = 13; // 0 - 23

if (horaAtual <= 12) {
  console.log("Bom dia!");

} else if (horaAtual <= 18) {
  console.log("Boa tarde!");

} else if (horaAtual <= 23) {
  console.log("Boa noite!");

} else {
    console.log("Hora inválida!");
}


//if é uma estrutura de controle condicional que executa um bloco de código se a condição for verdadeira.
//else if é uma estrutura de controle condicional que executa um bloco de código se a condição for verdadeira e a condição anterior for falsa.

// If pode ser usado sozinho, mas o else if não pode ser usado sozinho. O else if sempre deve ser precedido por um if.
// O else if pode ser usado quantas vezes forem necessárias, mas o else só pode ser usado uma vez e deve ser o último bloco de código a ser executado.


/**
 Entre 0 e 11: Bom dia!
 Entre 12 e 17: Boa tarde!
    Entre 18 e 23: Boa noite!
 */

    const horaAtual2 = 13;

    if (horaAtual2 >= 0 && horaAtual2 <= 11) {
        console.log("Bom dia!");
    }
    else if (horaAtual2 >= 12 && horaAtual2 <= 17) {
        console.log("Boa tarde!");
    } else if (horaAtual2 >= 18 && horaAtual2 <= 23) {
        console.log("Boa noite!");
    } else {
        console.log("Hora inválida!");
    }

