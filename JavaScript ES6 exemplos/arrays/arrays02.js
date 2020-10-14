//METODO SPLICE
let aprovados = ['Rodrigo', 'ana', 'maria', 'joao']

console.log(aprovados)
aprovados.splice(1, 2)
console.log(aprovados)

aprovados = ['Rodrigo', 'ana', 'maria', 'joao']
console.log(`\nantes da remoção: ${aprovados}`)
aprovados.splice(1, 2, 'aline', 'pedro')
console.log(`depois da remoção: ${aprovados}`)
