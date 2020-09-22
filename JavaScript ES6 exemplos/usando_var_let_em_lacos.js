//usando var a variavel continua ativa
for (var index = 0; index < 4; index++) {
    console.log(index)    
}

console.log(index)

//usando let a variavel permanece ativa apenas no bloco
for (let index2 = 0; index2 < 4; index2++) {
    console.log(index2)    
}

//console.log(index2) //index2 não definido

const functions = []

for (var index = 0; index < 4; index++) {
    functions.push(function(){
        console.log(index)
    })    
}

functions[2]()
functions[3]()