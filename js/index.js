//console.log para que salga la salida del codigo en la termial en vez de usar echo

//console.log("Hello, World!");
//console.log(window);
//console.log(global);

//poner globalThis para que funcione en cualquier entorno en vez de poner window
//console.log(globalThis);


//globalThis.console.log("This works everywhere!");
// console.log("Operaciones Aritmeticas:");



// import { suma, resta, multiplicacion, division } from '../operaciones-aritmeticas.mjs';

// console.log("Suma:", suma(5, 3));

// console.log("Resta:", resta(5, 3));

// console.log("Multiplicacion:", multiplicacion(5, 3));

// console.log("Division:", division(6, 3));



// Get HTML elements by ID

import { suma, resta, multiplicacion, division } from '../operaciones-aritmeticas.mjs';

//seleccionar los elementos del DOM
// zona numeros aleatorios
const numeroIzq = document.getElementById('numeroIzq');
const numeroDerech = document.getElementById('numeroDerech');

// zona boton numeros nuevos
const nuevoBtn = document.getElementById('btnNuevosNumeros');


// zona botones y resultado sumar y restar
const resultadoSuma = document.getElementById('resultadoSuma');
const resultadoResta = document.getElementById('resultadoResta');
const btnSumar = document.getElementById('btnSumar');
const btnRestar = document.getElementById('btnRestar');

// zona botones y resultado multiplicar y dividir
const resultadoMult = document.getElementById('resultadoMult');
const resultadoDiv = document.getElementById('resultadoDiv');
const btnMult = document.getElementById('btnMult');
const btnDiv = document.getElementById('btnDiv');



// funcion de un numero aleatorio entre el 0 y el 99
function numeroAleatorio() {
    return Math.floor(Math.random() * 100);
}

//Cuando voy a necesitar dos numeros aleatorios, cada uno en una constante, los voy a necesiar al cargar la pagina y al pulsar el boton de nuevos numeros

let aleatorioIzq = numeroAleatorio();
let aleatorioDerech = numeroAleatorio();
numeroIzq.textContent = numeroAleatorio;
numeroDerech.textContent = numeroAleatorio;

//evento para el boto de nuevos numeros
btnNuevosNumeros.addEventListener('click', () => {
    aleatorioIzq = numeroAleatorio();
    aleatorioDerech = numeroAleatorio();
    numeroIzq.textContent = aleatorioIzq;
    numeroDerech.textContent = aleatorioDerech;

    resultadoSuma.textContent = '';
    resultadoResta.textContent = '';
    resultadoMult.textContent = '';
    resultadoDiv.textContent = '';
});

// evento botones operaciones
btnSumar.addEventListener('click', () => {
    const resultado = suma(aleatorioIzq, aleatorioDerech);
    resultadoSuma.textContent = `Resultado: ${resultado}`;
});

btnRestar.addEventListener('click', () => {
    const resultado = resta(aleatorioIzq, aleatorioDerech);
    resultadoResta.textContent = `Resultado: ${resultado}`;
});

btnMult.addEventListener('click', () => {
    const resultado = multiplicacion(aleatorioIzq, aleatorioDerech);
    resultadoMult.textContent = `Resultado: ${resultado}`;
});

btnDiv.addEventListener('click', () => {
    const resultado = division(aleatorioIzq, aleatorioDerech);
    resultadoDiv.textContent = `Resultado: ${resultado}`;
});


