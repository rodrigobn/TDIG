const a = 1
const b = 2
const c = 3

const objeto1 = {
    a: a,
    b: b,
    c: c
}

const objeto2 = {a, b, c} //ES6 = ES2015

console.log(objeto1)
console.log(objeto2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const objeto3 = {}
objeto3[nomeAttr] = valorAttr
console.log(objeto3)

objeto4 = {
    funcao1: function(){

    },
    funcao2() {

    }
}