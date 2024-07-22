console.log("Inicio del script");

setTimeout(() => {
    console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
    console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");

let respuestaUsuario = prompt("¿Cuál es el orden en que se mostrarán los mensajes en consola?");

if (respuestaUsuario === "Inicio del script, Fin del script, Promesa resuelta, Primer setTimeout, Segundo setTimeout") {
    console.log("¡Felicidades! El orden es correcto.");

} else if (respuestaUsuario === "Inicio del script, Fin del script, Primer setTimeout, Segundo setTimeout, Promesa resuelta") {
    console.log("Error: El paso incorrecto es que la promesa se resuelve antes que los setTimeout.");
    
} else {
    console.log("Error: Los pasos incorrectos son que la promesa se resuelve antes que los setTimeout y que los setTimeout se ejecutan en orden.");
}