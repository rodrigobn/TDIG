//FUNÇÕES IMPORTANTES
const aprovados = ['pedro','Rodrigo', 'ana', 'maria', 'joao', 'aline']

//delete ultimo
aprovados.pop()
console.log(aprovados)

//insere no fianl
aprovados.push('aline')
console.log(aprovados)

//remove o primeiro
aprovados.shift()
console.log(aprovados)

//adiciona no primeiro
aprovados.unshift('pedro')
console.log(aprovados)

//inverte a lista
aprovados.reverse()
console.log(aprovados)

const algunsAlunos = aprovados.slice(2)
console.log(aprovados, algunsAlunos)


const algunsAlunos2 = aprovados.slice(1, 3)
console.log(aprovados, algunsAlunos2)