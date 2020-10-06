const pessoa = {
    nome: 'Luan'
}
pessoa.nome = 'joao'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end = 'rua tal'
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Rodrigo'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)