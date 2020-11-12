const usuario = {
    autor: "Demetrio Mestre",
    endereco: {
        rua: "Rua Qualquer",
        suite: "JS",
        cidade: "Campina Grande",
        CEP: "581415-145",
        geo: {
            lat: "13.51",
            lng: "52.54"
        }
    }
}

const { autor: autor, endereco: { cidade, geo: { lat, lng } } } = usuario
console.log(`${autor} - ${cidade}(${lat}, ${lng})`);


/*
Imprima os seguintes campos usando o operador de desestruturação: autor - cidade(lat,
    lng).Imprima usando o recurso Template String.
Saída esperada: Demetrio Mestre - Campina Grande(13.51, 52.54)
*/