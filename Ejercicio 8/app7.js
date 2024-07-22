
let contador = 0;

function incrementar() {
    contador++;
}

function obtenerValor() {
    return contador;
}

while (true) {
    let respuesta = prompt("¿Qué deseas hacer? (i)crementar, (o)btener valor, (s)alir");

    if (respuesta === "i") {
        incrementar();

    } else if (respuesta === "o") {
        console.log("Valor actual: " + obtenerValor());

    } else if (respuesta === "s") {
        break;
    }
}
