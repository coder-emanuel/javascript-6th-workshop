console.log("Inicio del script");

setTimeout(()=>{
    console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(()=>{
    console.log("Macrotarea 0 second (setTimeout)");
}, 1000);

// Microtarea: promesa
Promise.resolve()
.then(()=>{
    setTimeout(()=>{
        console.log("Macrotarea (setTimeout) inside Microtarea 1");
    }, 0);
})
.then((message)=>{
    console.log("Microtarea 2 (Promesa)");
});

// Microtarea: promesa
Promise.resolve()
.then(()=>{
    console.log("Microtarea 3 (Promesa)");
})
.then(()=>{
    console.log("Microtarea 4 (Promesa)");
})

console.log("Fin del script");