const objeto = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a+b+c
    }
}

console.log(JSON.stringify(objeto))


objeto2 = JSON.parse('{"nome": "Rodrigo", "idade": 30}')
console.log(objeto2.nome)