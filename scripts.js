alert("Bienvenidos al juego de adivina el 2/3 del promedio");
alert("Cada jugador debe elegir un numero del 1 al 99 con el objetivo de adivinar el 2/3 del promedio de los numeros dados por los  demas jugadores.");

let cantidadJugadores = prompt("Elija la cantidad de jugadores humanos que van a participar. \n Maximo 20 jugadores", "1");
let jugadores = [];
let numeroPartida = [];
let promedio;


function validarCantidadJugadores(cantidadJugadores){
    if(isNaN(cantidadJugadores)){
        return true;
    }else if(Number(cantidadJugadores) > 20 || Number(cantidadJugadores) < 2){
        return true;
    }else{
        return false;
    }
}

function cargarJugadores(cantJugadoresHumanos) {
    // Carga una lista de jugadores
    for (let i = 1; i <= 20; i++) {
        let newJugador = new Object();
        if (cantJugadoresHumanos > 0) {
            newJugador.nombre = prompt("Ingrese nombre del Jugador " + i);
            newJugador.tipo = "humano";
            newJugador.puntaje = 0;
            newJugador.numero = 0;
            cantJugadoresHumanos--;
        } else {
            newJugador.nombre = "CPU" + i;
            newJugador.tipo = "cpu";
            newJugador.puntaje = 0;
            newJugador.numero = 0;
        }
        jugadores.push(newJugador);
    }
}

function existeGanador() {
    // Cuando quede 1 solo jugador tendremos 1 ganador
    if(jugadores.length == 1){
        alert("El ganador es " + jugadores[0].nombre + " !!!!");
        return true;
    }else{
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

function eliminarPerdedor(numeroPerdedor){
    // Recorrela lista de jugadores buscando los jugadores que ingresaron el numero perdedor y los elimina de la lista
    for (let i = 0; i < jugadores.length; i++) {
        if(jugadores[i].numero == numeroPerdedor){
            alert("El jugador " + jugadores[i].nombre + " (" + jugadores[i].numero + ")" + " a sido eliminado!!");
            jugadores.splice(i,1);
        }
    }
}



//
while (validarCantidadJugadores(cantidadJugadores)) {
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
}




