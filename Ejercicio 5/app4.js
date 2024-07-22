
// Definir la función
function manejarAsincronia(callback, promesa) {
    promesa.then(()=>{
        callback("¡Promesa cumplida y callback ejecutado!", true);
    })

    .catch(()=>{
        callback("Promesa rechazada y callback ejecutado", false);
    });
}

// Crear la promesa
let promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    },2000)
})

// Invocar la función
manejarAsincronia((mensaje, exito)=>{
    if(exito) {
        console.log(mensaje);
    } else {
        console.error(mensaje);
    }
},promesa);
 
