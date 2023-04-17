alert("Bienvenidos al juego de adivina el 2/3 del promedio");
alert("Cada jugador debe elegir un numero del 1 al 99 con el objetivo de adivinar el 2/3 del promedio de los numeros dados por los  demas jugadores.");

let cantidadJugadores = prompt("Elija la cantidad de jugadores que van a participar. \n Por el momento solamente puede participar 1 jugador", "1");
let numeroJugador1;
let numeroJugador2;
let ganadasJugador1 = 0;
let ganadasJugador2 = 0;
let promedio;

while(isNaN(cantidadJugadores)){
    cantidadJugadores = prompt("Ingrese una cantidad de jugadores valida");
}

cantidadJugadores =  Number(cantidadJugadores);

function existeGanador(){
    if(ganadasJugador1 == 3 || ganadasJugador2 == 3){
        return true;
    }else{
        return false;
    }
}

function numberoCPU(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function promediarResultados(){
    return (((numeroJugador1 + numeroJugador2)/2) * 2 )/ 3;
}


function mostrarResultados(){
    return "Jugador 1: " + numeroJugador1 + "\n Jugadro 2: " + numeroJugador2 + "\n Promedio: " + promedio;
    
}

function compararResultados(){
    let diferenciaJugador1 = Math.max(numeroJugador1,promedio) - Math.min(numeroJugador1,promedio);
    let diferenciaJugador2 = Math.max(numeroJugador2,promedio) - Math.min(numeroJugador2,promedio);
    if(diferenciaJugador1 < diferenciaJugador2){
        ganadasJugador1++;
        alert("El ganador de la ronda es el Jugador 1 \n" + mostrarResultados());
    }else if(diferenciaJugador1 > diferenciaJugador2){
        ganadasJugador2++;
        alert("El ganador de la ronda es el Jugador 2 \n" + mostrarResultados());
    }else{
        ganadasJugador1++;
        ganadasJugador2++;
        alert("Es un empate!!! \n" + mostrarResultados());
    }
}


if(cantidadJugadores == 1){
    let rondas = 1;
    while(!existeGanador()){
        alert("Round "+ rondas);
        numeroJugador1 = prompt("Jugador 1, ingresa tu numero");
        while(isNaN(numeroJugador1)){
            numeroJugador1 = prompt("Jugador 1, ingresa tu numero");
        }
        numeroJugador1 = Number(numeroJugador1);

        alert("Ahora es el turno de CPU");
        numeroJugador2 = numberoCPU(1,99);

        promedio = promediarResultados();

        compararResultados();
        rondas++;
        numeroJugador1 = 0;
        numeroJugador2 = 0;
    }
    if(ganadasJugador1>ganadasJugador2){
        alert("El ganador es el Jugador 1");
    }else if(ganadasJugador1<ganadasJugador2){
        alert("El ganador es CPU");
    }else{
        alert("Es un empate, no hay ganadores");
    }

}

