
let cantidadJugadoresHumanos = 0;
let cantidadBots = 0;
let numeroPartida = [];
let promedio;

if(getJugadores().length > 0){
    document.getElementById('form-inicio').style.display = 'none';
    document.getElementById('tabla').style.display = 'block';
    limpiarTabla();
    cargarTabla();
}


function getJugadores(){
    return JSON.parse(sessionStorage.getItem("jugadores")) || [];
}

function setJugadores(jugadores){
    let jugadoresString =  JSON.stringify(jugadores);
    sessionStorage.setItem("jugadores",jugadoresString);
}


function cargarBots(cantidad) {
    // Carga una lista de jugadores
    for (let i = 1; i <= cantidad; i++) {
        let botJson = '{"nombre":"BOT'+i+'","tipo":"bot","puntaje":0,"numero":0}'
        let newJugador = JSON.parse(botJson);
        console.log(newJugador);
        agregarJugador(newJugador);
    }
}

function crearJugador() {
    const formCrearJugadores = document.getElementById("form-crear-jugador");
    const inputNombreJugador = document.getElementById("nuevo-nombre-jugador");
    let newJugador = new Object();
    newJugador.nombre = inputNombreJugador.value;
    newJugador.tipo = "humano";
    newJugador.puntaje = 0;
    newJugador.numero = 0;
    agregarJugador(newJugador);
    inputNombreJugador.value = "";

    if (getJugadores().length == cantidadJugadoresHumanos) {
        cargarBots(cantidadBots);
        formCrearJugadores.style.display = 'none';
    }
}

function agregarJugador(newJugador) {
    let jugadores = getJugadores();
    jugadores.push(newJugador);
    setJugadores(jugadores);
    limpiarTabla();
    cargarTabla();
}

function existeGanador() {
    // Cuando quede 1 solo jugador tendremos 1 ganador
    let jugadores = getJugadores();
    if (jugadores.length == 1) {
        alert("El ganador es " + jugadores[0].nombre + " !!!!");
        return true;
    } else {
        return false;
    }
}

function numberoCPU(min, max) {
    // Retorna un numero automatico
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function promediarResultados() {
    // Calcula el 2/3 del promedio
    let sumaTotal = numeroPartida.reduce((total, numero) => {
        return total + numero;
    });
    return Math.floor(((sumaTotal / jugadores.length) * 2) / 3);
}


function mostrarResultados() {
    // todo
}

function compararResultados() {
    // Recorre todos los resultados buscando el que mayor diferencia tiene con el promedio y lo retorna
    return numeroPartida.reduce((numeroPrevio, numero) => {
        if (Math.abs(numeroPrevio - promedio) > Math.abs(numero - promedio)) {
            return numeroPrevio;
        } else if (Math.abs(numeroPrevio - promedio) <= Math.abs(numero - promedio)) {
            return numero;
        }
    });
}

function eliminarPerdedor(numeroPerdedor) {
    // Recorrela lista de jugadores buscando los jugadores que ingresaron el numero perdedor y los elimina de la lista
    let jugadores = getJugadores();
    for (let i = 0; i < jugadores.length; i++) {
        if (jugadores[i].numero == numeroPerdedor) {
            alert("El jugador " + jugadores[i].nombre + " (" + jugadores[i].numero + ")" + " a sido eliminado!!");
            jugadores.splice(i, 1);
        }
    }
}

function mostrarConfiguracion() {
    document.getElementById('form-configuracion').style.display = 'block';
    document.getElementById('form-inicio').style.display = 'none';
}

function configurar() {

    const inputCantHumanos = document.getElementById("cantidad-jugadores-humanos");
    const inputCantBots = document.getElementById("cantidad-bots");
    const formConfiguracion = document.getElementById("form-configuracion");
    const formCrearJugadores = document.getElementById("form-crear-jugador");

    cantidadJugadoresHumanos = Number(inputCantHumanos.value);
    cantidadBots = Number(inputCantBots.value);
    formConfiguracion.style.display = 'none';
    formCrearJugadores.style.display = 'block';
}

function cargarTabla() {
    const tbody = document.getElementById('tbody-tabla');
    const tabla = document.getElementById('tabla');
    let jugadores = getJugadores();
    tabla.style.display = "block";

    for (let i = 0; i < jugadores.length; i++) {
        let nuevaLinea = document.createElement("tr");
        let dato1 = document.createElement("td");
        let dato2 = document.createElement("td");

        dato1.innerText = jugadores[i].nombre;
        dato2.innerText = jugadores[i].numero;

        nuevaLinea.appendChild(dato1);
        nuevaLinea.appendChild(dato2);

        tbody.appendChild(nuevaLinea);
    }
}

function limpiarTabla() {
    const tbody = document.getElementById('tbody-tabla');
    tbody.innerHTML = "";
}











//
/* while (validarCantidadJugadores(cantidadJugadores)) {
    cantidadJugadores = prompt("Ingrese una cantidad de jugadores valida");
}

cantidadJugadores = Number(cantidadJugadores);

// Se carga una lista de jugadores
cargarJugadores(cantidadJugadores);
while (!existeGanador()) {
    // En numeroPartida guardamos todos los numeros ingresados en 1 partida
    numeroPartida = [];
    //Se solicita el numero a cada jugador
    jugadores.map((jugador) => {
        if (jugador.tipo == "cpu") {
            jugador.numero = numberoCPU(1, 100);
        } else {
            jugador.numero = Number(prompt(jugador.nombre + " ,ingresa tu numero"));
        }
        numeroPartida.push(jugador.numero);
    });

    // Se calcula el 2/3 del promedio
    promedio = promediarResultados();
    alert("El promedio es: " + promedio);
    // Se elimina el perdedor
    eliminarPerdedor(compararResultados());
    alert("Los numeros ingresados fueron: " + numeroPartida);
} */




