/*
function randomizar({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {
    fatorCalculo: 75,
    max: 50,
    min: 40
}

console.log(randomizar(obj))
console.log(randomizar({max: 10}))
console.log(randomizar({}))
//console.log(randomizar({})) //Error
*/

function randomizar([ min = 0, max = 1000 ]) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(randomizar( [1, 5] ))
console.log(randomizar( [1, ,] ))
console.log(randomizar( [ , ] ))
console.log(randomizar( [1, 5, 100] ))
//console.log(randomizar()) // Error