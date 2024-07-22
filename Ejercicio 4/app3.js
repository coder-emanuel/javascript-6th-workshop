console.log("Intentando llamar a 'funcionDeclarada' antes");
try {
    console.log(funcionDeclarada());
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Intentando llamar 'funcionExpresada' antes");
try {
    console.log(funcionExpresada());
} catch (error) {
    console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
    return "Función declarada ha sido llamada."
}

// Declaración de una función expresada
const funcionExpresada = function() {
    return "Función expresada ha sido llamada."
}

console.log("LLamando a 'funcionDeclarada' después");
console.log(funcionDeclarada());

console.log("LLamando a 'funcionExpresada' después");
console.log(funcionExpresada());