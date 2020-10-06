const produto = new Object
produto.nome = 'geladeira'
produto['marca do produto'] = 'alguma marca'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const aluno = {
    matricula: '123456',
    nome: 'Rodrigo',
    endereco: {
        logradouro: 'Rua tal',
        numero: 999,
    },
    diciplinasMatriculadas: [{
        nome: 'Programação WEB',
        nota: 9
    }, {
       nome: 'TDIG',
       nota: 7 
    }],

    calcularCRA: function(){
        return (this.diciplinasMatriculadas[0].nota + this.diciplinasMatriculadas[1].nota) / 2
    }
}

console.log(aluno)
aluno.endereco.logradouro = 'outra rua'
aluno['endereco']['numero'] = 1000
console.log(aluno)
