//

const alunos = [
    {
        nome: 'Luan',
        nota: 7.5,
        bolsista: false
    },
    {
        nome: 'Rodrigo',
        nota: 8.0,
        bolsista: true
    },
    {
        nome: 'Agatha',
        nota: 10.0,
        bolsista: false
    },
    {
        nome: 'Thiago',
        nota: 9.0,
        bolsista: true
    },
]

console.log(alunos.map(aluno => aluno.nota))

const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, valorAtual){
    console.log(` Valor acumulado: ${acumulador}, Valor atual: ${valorAtual}`)
    console.log(`${acumulador} + ${valorAtual}`)
    return acumulador + valorAtual
}, 0)

console.log(`Resultado = ${resultado}`)