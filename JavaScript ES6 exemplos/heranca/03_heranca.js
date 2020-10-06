const pai = {
    nome: 'Luan',
    corCabelo: 'preto'
}

const filha1 = Object.create(pai) //Criar objeto atribuindo o pai como heranca
filha1.nome = 'Aline'
console.log(filha1.nome, filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Ana', 
        writable: false, 
        enumerable: true
    },
    idade: {
        value: 20, 
        writable: false, 
        enumerable: false
    }
}) //Cria objeto atribuindo o pai como heranca e definindo atributos

console.log(filha2.nome)

filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(pai)) //nome e cor do cabelo
console.log(Object.keys(filha1)) //nome
console.log(Object.keys(filha2)) //Apenas nome pois todos o atributo idade esta enumerable = false


for(let chave in filha2) {
    filha2.hasOwnProperty(chave)? console.log(chave) : console.log(`Passando por herança: ${chave}`)
}