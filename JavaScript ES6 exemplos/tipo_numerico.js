let peso1 = 1.0
let peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(typeof peso1)

peso1 = 1.1
console.log(Number.isInteger(peso1))
console.log(typeof peso1)

const avaliacao1 = 9.854
const avaliacao2 = 6.800

const total_avaliacoes = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total_avaliacoes / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))