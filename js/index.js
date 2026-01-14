//console.log para que salga la salida del codigo en la termial en vez de usar echo

//console.log("Hello, World!");
//console.log(window);
//console.log(global);

//poner globalThis para que funcione en cualquier entorno en vez de poner window
//console.log(globalThis);


//globalThis.console.log("This works everywhere!");
console.log("Operaciones Aritmeticas:");



import { suma, resta, multiplicacion, division } from '../operaciones-aritmeticas.mjs';

console.log("Suma:", suma(5, 3));

console.log("Resta:", resta(5, 3));

console.log("Multiplicacion:", multiplicacion(5, 3));

console.log("Division:", division(6, 3));



// Get HTML elements by ID
const numeroIzq = document.getElementById('numeroIzq');
const numeroDerech = document.getElementById('numeroDerech');
const btnNuevosNumeros = document.getElementById('btnNuevosNumeros');
const resultadoSuma = document.getElementById('resultadoSuma');
const resultadoResta = document.getElementById('resultadoResta');
const btnSumar = document.getElementById('btnSumar');
const btnRestar = document.getElementById('btnRestar');
const btnMultiplicar = document.getElementById('resultadoMult');
const resultadoMult = document.getElementById('resultadoDiv');
const resultadoDiv = document.getElementById('btnMult');
const btnDividir = document.getElementById('btnDiv');


// Add event listeners
sumaBtn.addEventListener('click', () => {
    resultado.textContent = suma(5, 3);
});

restaBtn.addEventListener('click', () => {
    resultado.textContent = resta(5, 3);
});

multiBtn.addEventListener('click', () => {
    resultado.textContent = multiplicacion(5, 3);
});

divBtn.addEventListener('click', () => {
    resultado.textContent = division(6, 3);
});