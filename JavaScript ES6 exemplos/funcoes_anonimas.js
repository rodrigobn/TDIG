const soma = function(x, y) {
    return x + y
}

const subtracao = function(x, y) {
    return x - y
}

/**
 * 
 * @param {*} a Numero
 * @param {*} b Numero
 * @param {Function} operacao Função da operação
 */
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(2, 1, subtracao)
imprimirResultado(2, 2, function (x, y) {
    return x + y
})
imprimirResultado(2, 3, (x, y) => x + y)

const pessoa = {
    conversar: () => console.log('Olá!')
}

pessoa.conversar()