const produto = Object.preventExtensions({
    nome: 'Notebook', preco: 1.99, tag: 'promocao'
})

console.log('Extencivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descicao = 'Borracha escolar branca'

delete produto.tag
console.log(produto)

const pessoa = {nome: 'Rodrigo', idade: 35}
Object.seal(pessoa)

pessoa.nome = 'OUtro nome'
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Mais um nome'
pessoa.sobrenome = 'da Silva'

console.log(pessoa)