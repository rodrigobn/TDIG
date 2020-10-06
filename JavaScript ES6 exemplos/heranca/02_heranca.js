Object.prototype.attr0 = 'Atributo 0 - Object.prototype' //Não é uma boa pratica setar a raiz

const avo = {attr1: 'Atributo 1 - avo'}

const pai = {
    __proto__: avo, 
    attr2: 'Atributo 2 - pai', 
    attr3: 'Atributo 3 - pai'}

const filho = {
    __proto__: pai,
    attr3: 'atributo 3 - filho' //sobrescrita
}

console.log(filho.attr0) //herdou da raiz
console.log(filho.attr1) //herdou do avo
console.log(filho.attr2) //herdou do pai
console.log(filho.attr3) //sobrescreveu do pai

const carro = {
    velAtual: 0,
    velMax: 260,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const cruze = {
    modelo: 'Cruze',
    velMax: 260,
}

const prisma = {
    __proto__:carro,
    modelo: 'prisma',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(cruze, carro) //definir o pai do objeto
Object.setPrototypeOf(prisma, carro) //definir o pai do objeto

console.log(cruze)
console.log(prisma)

prisma.aceleraMais(100)
console.log(prisma.status()) //sobrescreveu do pai
console.log(cruze.status()) //herdou do pai