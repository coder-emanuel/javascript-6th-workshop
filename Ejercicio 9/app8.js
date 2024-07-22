// Pedir al usuario que ingrese un intervalo en segundos
let intervalo = prompt("Ingrese un intervalo en segundos");

// Convertir el intervalo a milisegundos
let milisegundos = intervalo * 1000;

// Crear una promesa que se resuelva después del intervalo
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Mensaje después"+ intervalo +"segundos");
    }, milisegundos);
});

// Manejar la promesa con then y catch
promesa.then((mensaje) => {
    console.log(mensaje);
});

// Usar fetch para cargar datos de la URL
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((Response) => Response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error al cargar datos:", error));