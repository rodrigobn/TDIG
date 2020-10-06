/**
 * 5 - Escreva uma função que receba dois parâmetros início e fim. 
 * Essa função deve imprimir todos os números primos que estão entre esses 
 * valores. Por padrão os valores devem ser 0 para início e 100 para fim. 
 * Atente para corrigir a ordem dos parâmetros caso a função receba o valor 
 * maior antes do menor.
 */

 /**
  * Numeros primos no intervalo [inicio, fim]
  * @param {*} inicio 
  * @param {*} fim 
  */
function numerosPrimos(inicio = 0, fim = 100) {
    let resultado = ''
    if (inicio > fim) {
        const temp = inicio;
        inicio = fim
        fim = temp
    }

    if (inicio <= 1) {
        inicio = 2
    }

    for (let numeroSelecionado = inicio; numeroSelecionado < fim; numeroSelecionado++) {
        let primo = true
        for (let todos = inicio; todos < fim; todos++) {
            if (todos != numeroSelecionado) {
                if(numeroSelecionado % todos == 0) primo = false
            }            
        }
        if (primo) {
            resultado += numeroSelecionado + ' '
        }        
    }

    return resultado
}

console.log(numerosPrimos())