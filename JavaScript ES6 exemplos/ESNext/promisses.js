function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            reject('Deu erro!')
        }, segundos * 1000)
    })
}

falarDepoisDe(5, 'Frase')
    .then(result => result.concat(' concatenada'))
    .then(resultConcatenado => console.log(resultConcatenado))
    .catch(error => console.log(error))

console.log('Executando...')

setTimeout(() => {
    console.log('Ainda Executando...')
}, 2000)