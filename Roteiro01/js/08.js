function fatorial() {
    var stringResultado = ""
    var numeros = document.getElementById("numeros").value.split(",");
    numeros.forEach(numero => {
        stringResultado += montaString(numero) + "<br>"
    });

    document.write(stringResultado);
}

function montaString(numero) {
    stringResultado = "Fatorial de " + numero + "! = "
    fatorial = 1
    while (numero >= 1) {
        
        stringResultado += numero
        if (numero > 1) {
            stringResultado += " x "
        } else {
            stringResultado += " = "
        }
        
        fatorial *= numero
        numero -= 1
    }
    stringResultado += fatorial
    return stringResultado
}