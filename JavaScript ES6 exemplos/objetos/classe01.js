class Lancamento {
    constructor(
        nome = 'Genérico',
        valor = 0
    ) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    //operador spread
    adicionarLancamentos(...lancamentos) {
        lancamentos.forEach(element => this.lancamentos.push(element))
    }

    sumario(){
        this.valorConsolidado = 0
        this.lancamentos.forEach(element => {
            this.valorConsolidado += element.valor
        })
        return this.valorConsolidado
    }
}

const salario = new Lancamento('salario', 4500)
const contaDeLuz = new Lancamento('luz', -220)
const contaDeAgua = new Lancamento('agua', -90)

const contas = new CicloFinanceiro(10, 2020)
contas.adicionarLancamentos(salario, contaDeLuz, contaDeAgua)

console.log(contas.sumario())