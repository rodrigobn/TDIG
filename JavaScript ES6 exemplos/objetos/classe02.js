class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(sobrenome) {
        super(sobrenome)
    }
}

const avo = new Avo('pereira')
const pai = new Pai('pereira')
const filho = new Filho('Silva')

console.log(avo)
console.log(pai)
console.log(filho)