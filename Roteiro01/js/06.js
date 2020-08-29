function ordenarLista() {
    var numeros = document.getElementById("numeros").value;
    var numerosList = numeros.split(",")
    
    alert("Lista ordenada = " + numerosList.sort(compararNumeros))
}

function compararNumeros(a, b) {
    return a - b;
  }