// Operador Rest
function somatorio(...numeros){
    let somatorio = 0
    numeros.forEach(n => somatorio += n)
    return somatorio
}

console.log(`Total: ${somatorio(2, 4, 6, 8)}`)

// Operador Spread

const servidor = {
    nome: 'Rodrigo',
    salario: 1700.00
}
console.log(servidor)

const servidorClone = {
    ...servidor,
    ativo: true
}
console.log(servidorClone)

const turmaA = ['Agatha', 'Rodrigo', 'Jenniffer']
const turmaB = ['Thiago', ...turmaA, 'Luan']

console.log(turmaA)
console.log(turmaB)