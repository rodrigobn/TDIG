//Usado para converter ou modificar dados, 

const numeros = [1,2,3,4,5]

let resultadoMap = numeros.map(function(value) {
    return value * 2
})

console.log(resultadoMap)

const soma10 = num => num + 10
const triplo = num => num * 3
const formatToReal = num => `R$ ${parseFloat(num).toFixed(2).replace('.',',')}`

console.log(numeros.map(soma10).map(triplo).map(formatToReal))

const carrinho = [
    '{"nome": "Borracha", "preco": 3.50}',
    '{"nome": "Caderno", "preco": 14.60}',
    '{"nome": "Kit de lapis", "preco": 23.20}',
    '{"nome": "Caneta", "preco": 7.40}'
]

const trasnformaEmObjeto = json => JSON.parse(json)
const apenasPrecos = produto => produto.preco


console.log(carrinho.map(trasnformaEmObjeto).map(apenasPrecos).map(formatToReal))

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))        
    }
    return newArray
}

console.log(carrinho.map2(trasnformaEmObjeto).map2(apenasPrecos))
