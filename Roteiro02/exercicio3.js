/**
 * 3 - Escreva uma função do tipo Arrow que receba como parâmetro um vetor de 
 * notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja 
 * atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, 
 * de 7,0 a 8,9 oconceito B e de 9,0 a 10,0 o conceito A. Atenção: a função 
 * deve utilizar alguma função callback.
 */

const notas = [2.3, 8.2, 6.5, 10]

notas.forEach(nota => {
    atribuiConceito(nota, resultado => {
        console.log(`Nota: ${nota}, ${resultado}`)
    })
})

/**
 * Atribui conceito [A,B,C,D] a nota recebida
 * @param {*} nota Nota 
 * @param {*} callback Função que retorna o conceito em relação a nota
 */
function atribuiConceito(nota, callback) {
    if(0 < nota && nota < 4.9) return callback(`conceito: D`)
    if(5 < nota && nota < 6.9) return callback(`conceito: C`)
    if(7 < nota && nota < 8.9) return callback(`conceito: B`)
    if(9 <= nota) return callback(`conceito: A`)
}