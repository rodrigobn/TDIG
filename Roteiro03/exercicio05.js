/*
5) Transforme as funções desenvolvidas na questão 04 para usarem a técnica async/await
ao invés de promisses.
*/

function colocarTodasPalavrasEmMaiusculo(palavras) {
    let resultado = []
    return new Promise((resolve, reject) => {
        console.log('Trasnformando em maiúsculo...')
        setTimeout(() => {
            palavras.map(palavra => {
                if (typeof palavra == typeof '') {
                    resultado.push(palavra.toUpperCase())
                } else {
                    reject('O metodo aceita apenas Strings!')
                }
            })
            resolve(resultado)
        }, 2000)
    })
}

async function ordenarPalavras(palavras) {
    let resultado = await colocarTodasPalavrasEmMaiusculo(palavras)
    return resultado.sort()
}

ordenarPalavras(['rodrigo', 'maria'])
    .then(resultado => console.log(resultado))
    .catch(error => console.log("Falhou!", error))