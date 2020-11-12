/*
4) Escreva duas funções javascript (ES6) usando a técnica de promisses. A primeira
função, colocarTodasPalavrasEmMaiusculo(), receberá um array de palavras e as colocará
em maiúsculo. Nesta primeira função, o uso da função map (de Array) é obrigatório (acredito
que você já saiba a razão). Verifique, dentro do escopo da função map, se o array possui
valores que não são Strings, e se houver valores que não são String, um erro deve ser gerado.

A segunda função, ordenarPalavras(), realizará uma ordenação nas palavras por ordem
alfabética. Nesta segunda função, utilize a função forEach (de Array) para verificar se o
array possuir valores que não são Strings, caso haja valores que não são String, gere um erro.
Atenção: você deverá utilizar encadeamento de funções.
*/

function colocarTodasPalavrasEmMaiusculo(palavras) {
    let resultado = []
    return new Promise((resolve, reject) => {
        palavras.map(palavra => {
            if (typeof palavra == typeof '') {
                resultado.push(palavra.toUpperCase())
            } else {
                reject('O metodo aceita apenas Strings!')
            }
        })
        resolve(resultado)
    })
}

function ordenarPalavras(palavras){
    let resultado = []
    return new Promise((resolve, reject) => {
        palavras.forEach(palavra => {
            if (typeof palavra == typeof '') {
                resultado.push(palavra)
            } else {
                reject('O metodo aceita apenas Strings!')
            }
        });
        resolve(resultado.sort())
    })
}

colocarTodasPalavrasEmMaiusculo(['rodrigo', 'maria'])
    .then(resultado => ordenarPalavras(resultado))
    .then(resultadoOrdenado => console.log(resultadoOrdenado))
    .catch(error => console.log("Falhou!", error))