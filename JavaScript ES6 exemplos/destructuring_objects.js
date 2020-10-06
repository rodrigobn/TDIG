// Operador de desestruturação - ES6 (2015)

const pessoa = {
    nome: 'Rodrigo',
    idade: 30,
    endereco: {
        logradouro: 'Av. Elpidio de Almeida',
        numero: 458
    }
}

//Extração direta
console.log(`Nome: ${pessoa.nome}`)

//Extração desestruturada
const{nome: name, idade: age} = pessoa

console.log(`
Nome: ${name} 
Idade: ${age}`
)

//Desestruturação de variaveis que não existem
const{sobrenome, bemHumorada = true} = pessoa
console.log(`
Sobrenome: ${sobrenome} 
Bem humorado? ${bemHumorada ? 'sim': 'não'}`
)

//Desestruturação da desestruturação
const { endereco: {logradouro, numero, cep} } = pessoa
console.log(`
Logradouro: ${logradouro} 
N° ${numero}
CEP: ${cep}`
)

/*
//Desestruturação da variaveis q não existem
const { conta: { agencia, valor } } = pessoa
console.log(`
Agencia: ${agencia} 
Valor: ${valor}`
)
*/