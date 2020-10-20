const aprovados = ['pedro','Rodrigo', 'ana', 'maria', 'joao', 'aline']

aprovados.forEach((value, index) => {
    console.log(`${index + 1}) ${value}`)
})

const exibirAprovados = nome => console.log(nome)

aprovados.forEach(exibirAprovados)

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this)        
    }
}

aprovados.forEach2(exibirAprovados)