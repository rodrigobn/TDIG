const pessoa = {
    nome: 'Rodrigo',
    idade: 30, 
    peso: 70
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa)
console.log(Object.keys(pessoa))

const dest = {a: 1}
const objeto1 = {b: 2}
const objeto2 = {c: 3, a: 4}

const objetoCompleto = Object.assign(dest, objeto1, objeto2)
console.log(objetoCompleto)