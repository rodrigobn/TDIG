const sequencia = {
    _valor: 1,

    get valor(){return this._valor++},

    set valor(valor){
        this._valor = valor
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)