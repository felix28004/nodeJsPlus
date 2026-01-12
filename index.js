//console.log para que salga la salida del codigo en la termial en vez de usar echo

//console.log("Hello, World!");
//console.log(window);
//console.log(global);

//poner globalThis para que funcione en cualquier entorno en vez de poner window
//console.log(globalThis);


//globalThis.console.log("This works everywhere!");
console.log("Operaciones Aritmeticas:");

import { suma, resta, multiplicacion, division } from './operaciones-aritmeticas.mjs';

console.log("Suma:", suma(5, 3));

console.log("Resta:", resta(5, 3));

console.log("Multiplicacion:", multiplicacion(5, 3));

console.log("Division:", division(6, 3));

