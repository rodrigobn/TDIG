function ordenarLista() {
    var numeros = document.getElementById("numeros").value.split(",");
    let soma = 0
    numeros.forEach(element => {
        if (element % 2 != 0 && element % 3 == 0 && element > 0) {
            soma += parseInt(element)
        }
    });

    alert("Soma = " + soma)
}
