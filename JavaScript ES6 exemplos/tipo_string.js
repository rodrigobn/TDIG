const universidade = 'Universidade Estadual da Paraiba'

let index = 4
let char = 'a'

console.log(`Caracter na posição: ${index}`)
console.log(universidade.charAt(index))

index = 300

console.log(`\nCaracter na posição: ${index}`)
console.log(universidade.charAt(index))

index = 4

console.log(`\nCodigo do caracter na posição: ${index}`)
console.log(universidade.charCodeAt(index))

console.log(`\nPrimeira posição do caractar: ${char}`)
console.log(universidade.indexOf(char))

console.log(`\nUltima posição do caractar: ${char}`)
console.log(universidade.lastIndexOf(char))

console.log(`\nSubstring a partir do caractar: ${index}`)
console.log(universidade.substring(index))

console.log(`\nSubstring no intervalo: (${index}, 10)`)
console.log(universidade.substring(index, 10))

console.log(`\nOperador de concatenação de String`)
console.log('Universidade: '.concat(universidade.concat(' - TFIG')))

console.log(`\nSubstituir o primeiro caracter '${char}' encontrado por outro`)
console.log(universidade.replace(char, '4'))

console.log(`\nSubstituir o primeiro caracter encontrado por outro usando regex`)
console.log(universidade.replace(/a/i, '4'))

console.log(`\nQuebrar string em array`)
console.log(universidade.split(' '))