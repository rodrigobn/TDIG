// Filtrar dados de uma lista atravez de uma caracteristica

const produtos = [
    {
        nome: 'Notebook',
        preco: 2499,
        fragil: true
    },
    {
        nome: 'Ipad',
        preco: 2199,
        fragil: true
    },
    {
        nome: 'Copo de vidro',
        preco: 12.49,
        fragil: true
    },
    {
        nome: 'Copo de plastico',
        preco: 18.99,
        fragil: false
    }
]

console.log(produtos.filter(function(produto){
    return produto.preco > 2000
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

//console.log(produtos.filter(caro).filter(fragil))


Array.prototype.filter2 = function (callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }        
    }
    return newArray
}

console.log(produtos.filter2(caro).filter2(fragil))