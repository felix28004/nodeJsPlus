//simulacion del comportamiento mono hilo en nodejs
//Modulo de node.js de lectura y escrutura de archivos
//fs es File System, es el modulo para trabajar con archivos
const fs = require('node:fs');


//Sistema mono hilo
console.log('*'.repeat(50));
console.log('Inicio de la lectura del sincrona Uno');
console.log('*'.repeat(50));

const datosSincrono = fs.readFileSync('archivos/lectura1.txt', 'utf-8');

console.log('Datos sincronos:', datosSincrono);
console.log('Fin de la lectura sincrona');
//----------------------------------------------------------------------

console.log('\n' + '-'.repeat(50) + '\n');
console.log('Trabajando en un tema importante...');
console.log('*'.repeat(50));

// lectura del segundo archivo
console.log('*'.repeat(50));
console.log('Inicio de la lectura del sincrona Dos');
console.log('*'.repeat(50));

const datosSincronoDos = fs.readFileSync('./archivos/lectura2.txt', 'utf-8');

console.log('Datos sincronos:', datosSincronoDos);
console.log('Fin de la lectura sincrona');

//callbacks, proemesas, async/await
//Node acepta las Promesas
//Sistema mono hilo - asincrono promesas
console.log('\n' + '-'.repeat(50));
console.log('Inicio de la lectura asincrona con Promesas Uno');
console.log('*'.repeat(50));

fs.promises.readFile('archivos/lectura1.txt', 'utf-8')
    .then((datosAsincronoUno) => {
        console.log('Datos asincronos con Promesas:', datosAsincronoUno);
        console.log('Fin de la lectura asincrona con Promesas Uno');
    })

//El dos con promesas
console.log('\n' + '-'.repeat(50));
console.log('Inicio de la lectura asincrona con Promesas Dos');
console.log('*'.repeat(50));

fs.promises.readFile('archivos/lectura1.txt', 'utf-8')
    .then((datosAsincronoDos) => {
        console.log('Datos asincronos con Promesas:', datosAsincronoDos);
        console.log('Fin de la lectura asincrona con Promesas Dos');
    })
