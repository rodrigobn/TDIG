/**
4 - (Questão adaptada do URI online Judge) Escreva uma função que leia um 
 valor de ponto flutuante com duas casas decimais. Este valor representa um 
 valor monetário. A seguir, esta função deve calcular o menor número de notas 
 e moedas possíveis no qual o valor (passado como parâmetro) pode ser 
 decomposto. As notas consideradas são de 200, 100, 50, 20, 10, 5, 2. 
 As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir 
 mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).
Exemplo de Entrada: 576.73

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor 
inicial. Exemplo:

NOTAS:
2 nota(s) de R$ 200.00
1 nota(s) de R$ 100.00
1 nota(s) de R$ 50.00
1 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
1 nota(s) de R$ 5.00
0 nota(s) de R$ 2.00
MOEDAS:
1 moeda(s) de R$ 1.00
1 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
2 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
3 moeda(s) de R$ 0.01

Obs: Utilize ponto (.) para separar a parte decimal.
 */

console.log(numeroRandomico())
quebraValor(numeroRandomico())

function quebraValor(valor){
    quebraMoedas(quebraNotas(valor))
    }

function quebraNotas(valor){
    console.log('NOTAS:')
    while (valor > 2) {
        if (Math.trunc(valor/200) > 0 ) {
            console.log(`${Math.trunc(valor/200)} nota(s) de R$ 200.00`)
            valor -= 200 * Math.trunc(valor/200)
        } else {
            console.log(`0 nota(s) de R$ 200.00`)
        }
        if (Math.trunc(valor/100) > 0) {
            console.log(`${Math.trunc(valor/100)} nota(s) de R$ 100.00`)
            valor -= 100 * Math.trunc(valor/100)
        } else {
            console.log(`0 nota(s) de R$ 100.00`)
        }       
        if(Math.trunc(valor/50) > 0) {
            console.log(`${Math.trunc(valor/50)} nota(s) de R$ 50.00`)
            valor -= 50 * Math.trunc(valor/50)
        } else {
            console.log(`0 nota(s) de R$ 50.00`)
        }
        
        if(Math.trunc(valor/20) > 0) {
            console.log(`${Math.trunc(valor/20)} nota(s) de R$ 20.00`)
            valor -= 20 * Math.trunc(valor/20)
        } else {
            console.log(`0 nota(s) de R$ 20.00`)
        }
        
        if(Math.trunc(valor/10) > 0) {
            console.log(`${Math.trunc(valor/10)} nota(s) de R$ 10.00`)
            valor -= 10 * Math.trunc(valor/10)
        } else {
            console.log(`0 nota(s) de R$ 10.00`)
        }
        
        if(Math.trunc(valor/5) > 0) {
            console.log(`${Math.trunc(valor/5)} nota(s) de R$ 5.00`)
            valor -= 5 * Math.trunc(valor/5)
        } else {
            console.log(`0 nota(s) de R$ 5.00`)
        }
        
        if(Math.trunc(valor/2) > 0) {
            console.log(`${Math.trunc(valor/2)} nota(s) de R$ 2.00`)
            valor -= 2 * Math.trunc(valor/2)
        } else {
            console.log(`0 nota(s) de R$ 2.00`)
        }
        return valor
    }    
}

function quebraMoedas(moedas){
    console.log('\nMOEDAS:')
    while (moedas > 0) {
        moedas = moedas.toFixed(2)
        console.log(moedas)
        if (Math.trunc(moedas/1) > 0) {
            console.log(`${Math.trunc(moedas/1)} moeda(s) de R$ 1.00`)
            moedas -= 1 * Math.trunc(moedas/1)
            moedas = moedas.toFixed(2)
        } else {
            console.log(`0 moeda(s) de R$ 1.00`)
        }
        if (Math.trunc(moedas/0.5) > 0) {
            console.log(`${Math.trunc(moedas/0.5)} moeda(s) de R$ 0.50`)
            moedas -= 0.5 * Math.trunc(moedas/0.5)
            moedas = moedas.toFixed(2)
        } else {
            console.log(`0 nota(s) de R$ 0.50`)
        }       
        if(Math.trunc(moedas/0.25) > 0.0) {
            console.log(`${Math.trunc(moedas/0.25)} moeda(s) de R$ 0.25`)
            moedas -= 0.25 * Math.trunc(moedas/0.25)
            moedas = moedas.toFixed(2)
        } else {
            console.log(`0 moeda(s) de R$ 0.25`)
        }
        
        if(Math.trunc(moedas/0.10) > 0) {
            console.log(`${Math.trunc(moedas/0.10)} moeda(s) de R$ 0.10`)
            moedas -= 0.10 * Math.trunc(moedas/0.10)
            moedas = moedas.toFixed(2)
        } else {
            console.log(`0 moeda(s) de R$ 0.10`)
        }
        
        if(Math.trunc(moedas/0.05) > 0) {
            console.log(`${Math.trunc(moedas/0.05)} moeda(s) de R$ 0.05`)
            moedas -= 0.05 * Math.trunc(moedas/0.05)
            moedas = moedas.toFixed(2)
        } else {
            console.log(`0 moeda(s) de R$ 0.05`)
        }
        
        if(Math.trunc(moedas/0.01) > 0) {
            console.log(`${Math.trunc(moedas/0.01)} moeda(s) de R$ 0.01`)
            moedas -= 0.01 * Math.trunc(moedas/0.01)
            moedas = moedas.toFixed(2)
        } else {
            console.log(`0 moeda(s) de R$ 0.01`)
        }
    }
}

function numeroRandomico() {
    let valorMaximo = 1000000
    var precisao = 100; // 2 decimais
    
    return Math.floor(Math.random() * (valorMaximo * precisao - 1 * precisao) + 1 * precisao) / (1 * precisao);
}