
// vars call
console.log("Valor de a:", a); // undefined
try {
  console.log("Valor de b:", b); // Error: b is not defined
} catch (error) {
  console.log("Error:", error.message);
}

try {
  console.log("Valor de c:", c); // Error: c is not defined
} catch (error) {
  console.log("Error:", error.message);
}


// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
try {
  console.log("Resultado de funcionExpresada:", funcionExpresada());
} catch (error) {
  console.log("Error:", error.message);
}


// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};

// Ahora sí, mostramos los resultados reales
console.log("Valor de a:", a) // 1
console.log("Valor de b:", b) // 2
console.log("Valor de c:", c) // 3

console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada);