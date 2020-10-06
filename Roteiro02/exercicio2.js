/**
 * 2 - Escreva duas funções, uma para progressão aritmética e outra para 
 * progressão geométrica. Estas funções receberam como parâmetros um objeto 
 * (criado por você, lembre-se que deves escolher bons nomes) contendo os 
 * seguinte parâmetros: id: Number (identificador da função); nome: String 
 * (nome da função); n: Number (número de termo), ​a1:Number​ (o primeiro termo) 
 * e ​:Number​ (a razão). Esse objeto vai ser passado com parâmetro para as duas 
 * funções, e com o uso do operador de desestruturação, só devem ser passados 
 * como parâmetros os atributos n, a1 e r. As funções devem imprimir os ​n​ 
 * termos, bem como a soma dos elementos.
 * 
 * PA -> an = a1 + (n – 1)r
 * 
 */

const objetoPa = {
   id: 0,
   nome: 'pa',
   numeroTermos: 4,
   primeiroTermo: 1,
   razao: 4
}

const objetoPg = {
    id: 1,
    nome: 'pg',
    numeroTermos: 4,
    primeiroTermo: 1,
    razao: 4
 }

escolheProgressao(objetoPa)
escolheProgressao(objetoPg)


function escolheProgressao(objeto){
    const {nome, numeroTermos, primeiroTermo, razao} = objeto

    if (nome == 'pa') {
        console.log('Progressão aritmética (PA)')
        console.log(pa(numeroTermos, primeiroTermo, razao))
    }
    if (nome == 'pg') {
        console.log('progressão Geométrica (PG)')
        console.log(pg(numeroTermos, primeiroTermo, razao))
    }
}

function pa(numeroTermos, primeiroTermo, razao) {
    let soma = primeiroTermo
    
    console.log(`1° = ${primeiroTermo}`)
    for (let termo = 1; termo < numeroTermos; termo++) {
        console.log(`${termo + 1}° = ${primeiroTermo + (termo * razao)}`)
        soma += primeiroTermo + (termo * razao)        
    }

    console.log(`\nSomatorio = ${soma}\n`)
}

function pg(numeroTermos, primeiroTermo, razao) {
    let soma = primeiroTermo
    for (let termo = 1; termo <= numeroTermos; termo++) {
        console.log(`${termo}° = ${primeiroTermo * (razao**(termo - 1))}`)
        soma += primeiroTermo * (razao**(termo - 1))
    }

    console.log(`\nSomatorio = ${soma}\n`)
}