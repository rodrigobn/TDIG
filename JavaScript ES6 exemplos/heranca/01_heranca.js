const cruze = {
    modelo: 'Cruze',
    velMax: 260,
}

const prisma = {
    modelo: 'prisma',
    velMax: 200
}

console.log(cruze.__proto__) //aponta para o pai n ahierarquia
console.log(cruze.prototype)
console.log(cruze.__proto__ === Object.prototype)

console.log(Object.prototype) //Pai de todos na hierarquia
console.log(Object.prototype.__proto__ === null) //Não existe o pai do pai de todos


function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto, typeof cruze)

console.log(Object.prototype, MeuObjeto.prototype)