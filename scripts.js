alert("Bienvenidos al juego de adivina el 2/3 del promedio");
alert("Cada jugador debe elegir un numero del 1 al 99 con el objetivo de adivinar el 2/3 del promedio de los numeros dados por los  demas jugadores.");

let cantidadJugadores = prompt("Elija la cantidad de jugadores que van a participar. \n Por el momento solamente puede participar 1 jugador", "1");
let jugadores = [];
let numeroJugador1;
let numeroJugador2;
let ganadasJugador1 = 0;
let ganadasJugador2 = 0;
let promedio;

while (isNaN(cantidadJugadores)) {
    cantidadJugadores = prompt("Ingrese una cantidad de jugadores valida");
}

cantidadJugadores = Number(cantidadJugadores);

function cargarJugadores(cantJugadoresHumanos) {
    for (let i = 1; i <= 100; i++) {
        let newJugador = new Object();
        if(cantidadJugadoresHumanos > 0){
            newJugador.nombre = prompt("Ingrese nombre del Jugador " + i);
            newJugador.tipo = "humano";
            newJugador.puntaje = 0;
            newJugador.numero = 0;
            cantJugadoresHumanos--;
        }else{
            newJugador.nombre = "CPU"+i;
            newJugador.tipo = "cpu";
            newJugador.puntaje = 0;
            newJugador.numero = 0;
        }
        jugadores.push(newJugador);
    }
}

function existeGanador() {
    if (ganadasJugador1 == 3 || ganadasJugador2 == 3) {
        return true;
    } else {
        return false;
    }
}

function numberoCPU(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function promediarResultados() {
    let sumaTotal = jugadores.reduce((total, jugador) => {
        return total + jugador.numero;
    });
    return ((sumaTotal/jugadores.length) * 2) / 3;
}


function mostrarResultados() {
    return "Jugador 1: " + numeroJugador1 + "\n Jugadro 2: " + numeroJugador2 + "\n Promedio: " + promedio;

}

function compararResultados() {
 
}


if (cantidadJugadores == 1) {
    let rondas = 1;
    while (!existeGanador()) {
        alert("Round " + rondas);
        numeroJugador1 = prompt("Jugador 1, ingresa tu numero");
        while (isNaN(numeroJugador1)) {
            numeroJugador1 = prompt("Jugador 1, ingresa tu numero");
        }
        numeroJugador1 = Number(numeroJugador1);

        alert("Ahora es el turno de CPU");
        numeroJugador2 = numberoCPU(1, 99);

        promedio = promediarResultados();

        compararResultados();
        rondas++;
        numeroJugador1 = 0;
        numeroJugador2 = 0;
    }
    if (ganadasJugador1 > ganadasJugador2) {
        alert("El ganador es el Jugador 1");
    } else if (ganadasJugador1 < ganadasJugador2) {
        alert("El ganador es CPU");
    } else {
        alert("Es un empate, no hay ganadores");
    }

}

