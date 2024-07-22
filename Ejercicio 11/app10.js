const url = "http://localhost:3000"; // Ruta del archivo JSON

// Variables para almacenar datos de habitaciones y reservas
let rooms = [];
let roomTypes = [];
let reservations = [];

function cargarYMostrarData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error al cargar los datos.");
                    }
                    return response.json();
                })
                .then((data) => {
                    rooms = data.rooms;
                    roomTypes = data.roomTypes;
                    resolve(data);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        }, 3000);
    });
}

// Generador de ID para reservas
function generarGeneradorId() {
    let id = 1;
    return function () {
        return id++;
    };
}
const generarId = generarGeneradorId();

// Funciones de manejo de UI
function mostrarMenu() {
    document.getElementById('content').innerHTML = "";
}

function mostrarFormularioReserva() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Reservar Habitación</h2>
        <input type="number" id="num-habitacion" placeholder="Número de Habitación">
        <input type="date" id="fecha-inicio">
        <input type="date" id="fecha-fin">
        <input type="text" id="nombre-huesped" placeholder="Nombre del Huésped">
        <input type="number" id="num-huespedes" placeholder="Número de Huéspedes">
        <button id="confirmar-reserva-btn">Confirmar Reserva</button>
    `;

    document.getElementById('confirmar-reserva-btn').addEventListener('click', () => {
        const numeroHabitacion = parseInt(document.getElementById('num-habitacion').value);
        const fechaInicio = document.getElementById('fecha-inicio').value;
        const fechaFin = document.getElementById('fecha-fin').value;
        const huesped = document.getElementById('nombre-huesped').value;
        const numHuespedes = parseInt(document.getElementById('num-huespedes').value);
        crearReserva(numeroHabitacion, fechaInicio, fechaFin, huesped, numHuespedes);
    });
}

function crearReserva(numeroHabitacion, fechaInicio, fechaFin, huesped, numHuespedes) {
    const habitacion = rooms.find(room => room.number === numeroHabitacion);
    if (!habitacion) {
        alert("Habitación no encontrada.");
        return;
    }

    const capacidadHabitacion = roomTypes.find(type => type.id === habitacion.roomTypeId).capacity;
    if (numHuespedes > capacidadHabitacion) {
        alert("La capacidad de la habitación es insuficiente.");
        return;
    }

    const nuevaReserva = {
        id: generarId(),
        numeroHabitacion,
        fechaInicio,
        fechaFin,
        huesped,
        numHuespedes
    };

    reservations.push(nuevaReserva);
    alert("Reserva exitosa.");
    mostrarMenu();
}

// Inicialización del sistema
cargarYMostrarData()
    .then(() => {
        document.getElementById('reservar-btn').addEventListener('click', mostrarFormularioReserva);
        document.getElementById('ver-reservas-btn').addEventListener('click', mostrarReservas);
        document.getElementById('cancelar-reserva-btn').addEventListener('click', mostrarFormularioCancelarReserva);
        document.getElementById('editar-reserva-btn').addEventListener('click', mostrarFormularioEditarReserva);
        document.getElementById('salir-btn').addEventListener('click', () => {
            document.getElementById('content').innerHTML = "<h2>Gracias por usar nuestro sistema de reservas.</h2>";
        });
    })
    .catch((error) => {
        console.error("Error al manejar la promesa:", error);
    });
