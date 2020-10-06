function MeuObjeto(){}
console.log(MeuObjeto.__proto__)

const objeto1 = new MeuObjeto
const objeto2 = new MeuObjeto

console.log(objeto1.__proto__ === objeto2.__proto__)

MeuObjeto.prototype.nome = 'Rodrigo'
MeuObjeto.prototype.conversar = function (){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

objeto1.conversar()

objeto2.nome = 'Aline'
objeto2.conversar()

const objeto3 = {}
objeto3.__proto__ = MeuObjeto.prototype
objeto3.nome = 'Objeto 3'
objeto3.conversar()