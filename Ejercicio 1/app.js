// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
    // Function Scope
    var functionVariable = "Soy una variable local.";

    if (true) {
        // Block Scope
        let blockVariable = "Soy una variable de bloque.";
        console.log("Dentro del bloque:", blockVariable);
    }

    console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

class ScopeQuiz {
    constructor() {
        this.preguntas = [
            {
                pregunta: "¿Es posible acceder a globalVariable fuera de la función?",
                respuesta: "sí",
                explicacion: "glglobalVariable es accesible fuera de la función porque está en el scope global."
            },
            {
                pregunta: "¿Es posible acceder a funcionVariable fuera de la función?",
                respuesta: "no",
                explicacion: "functionVariable no es accesible fuera de la función porque está en el scope de la función."
            },
            {
                pregunta: "¿Es posible acceder a blockVariable fuera del bloque?",
                respuesta: "no",
                explicacion: "blockVariable no es accesible fuera del bloque porque está en el scope de bloque (definida con let)."
            }
        ];
    }

    askQuestions() {
        this.preguntas.forEach(p => {
            p.respuestaUsuario = prompt(p.pregunta);
        });
    }

    evaluateAnswers() {
        this.preguntas.forEach(p => {
            p.evaluacion = (p.respuestaUsuario === p.respuesta) ? "Correcto" : "Incorrecto";
        });
    }

    showResults() {
        this.preguntas.forEach(p => {
            alert(`Respuesta ${p.evaluacion}. ${p.explicacion}`);
        });
    }
}

const quiz = new ScopeQuiz();
quiz.askQuestions();
quiz.evaluateAnswers();
quiz.showResults();


