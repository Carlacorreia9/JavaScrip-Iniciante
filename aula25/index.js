const numero = 10;

if (numero >= 0) {
    console.log("Número positivo!");
}
else if (numero < 0) {
    console.log("Número negativo!");
}
else {
    console.log("Número inválido!");
}

const numero2 = -10;

if (numero2 >= 0 && numero2 <= 5) {
    console.log("O némero eestá entre 0 e 5!");
}
else if (numero2 > 5 && numero2 <= 10) {
    console.log("O número está entre 6 e 10!");
} else if (numero2 > 10 && numero2 <= 20) {
    console.log("O número está entre 11 e 20!");
} else if (numero2 > 20 && numero2 <= 30) {
    console.log("O número está entre 21 e 30!");
} else {
    console.log("Número inválido!");
}

