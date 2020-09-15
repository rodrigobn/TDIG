const nome = 'Rodrigo'
const concatenacao = 'Olá ' + nome + '!'

const concatUsandoTemplateString = `
|Olá          |
|    ${nome}  |
|            !|
`

console.log(concatenacao)
console.log(concatUsandoTemplateString)

console.log(`1 + 1 = ${1 + 1}`)