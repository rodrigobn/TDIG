const http = require('https')

const getCep = (cep, callback) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    http.get(url, response => {
        let resultado = ''
        response.on('data', dados => {
            resultado += dados
        })

        response.on('end', () => {
            try {
                callback(JSON.parse(resultado))
            } catch (error) {
                console.log(`Erro: ${error}`)
            }
            
        })
    })
}

let cep = getCep('58410215')
console.log(cep)

/*
Promise.all(
    [getCep('58410215', cep => console.log(cep)),
    getCep('58410500', cep => console.log(cep)),
    getCep('58410000', cep => console.log(cep))])
    */