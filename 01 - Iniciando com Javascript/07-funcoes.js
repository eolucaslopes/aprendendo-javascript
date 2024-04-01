// Formas de declarar funções

// Forma 01
function soma (valor1, valor2) {
    return valor1 + valor2
}  

console.log('Soma com function igual a', soma(1, 2))

// Forma 02
const soma2  = function (valor1, valor2) {
    return valor1 + valor2
}

console.log('Soma utilizando const com função anônima igual a', soma2(8, 2))

// Forma 03
const soma3 = (valor1, valor2) => {
    return valor1 + valor2
}

console.log('Soma utilizando arrow function igual a', soma3(5, 4))

// Forma 04
const soma4 = (valor1, valor2) => valor1 + valor2

console.log('Soma utilizando arrow function de forma reduzida é igual a', soma4(10, 10))