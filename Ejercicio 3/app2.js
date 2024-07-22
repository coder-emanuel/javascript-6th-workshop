// Creación de la función con closure
function crearSumador(num) {
    return function (num2) {
        return num + num2;
    };
}

// Prueba con diferentes valores iniciales
const sumarCinco = crearSumador(5);
const sumarDiez = crearSumador(10);
const SumarVeinte = crearSumador(20);

// Utiliza la función retornada para realizar varias sumas
console.log(sumarCinco(3)); // 8
console.log(sumarDiez(5)); // 15
console.log(SumarVeinte(10)); // 30

