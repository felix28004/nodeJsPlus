const so = require('node:os');

//platafor = es la clase
console.log('Sistema Operativo:', so.platform());
console.log('Arquitectura:', so.arch());
//Memoria en Gigas
console.log('Memoria Total (GB):', (so.totalmem() / (1024 ** 3)).toFixed(2));
console.log('Memoria Libre (GB):', (so.freemem() / (1024 ** 3)).toFixed(2));
console.log('CPU:', so.cpus());
console.log('Directorio Home:', so.homedir());
console.log('tiempo de actividad:', so.uptime());

//cuanto timpo hace que tengo el ordenador encendido en horas
console.log('Tiempo de actividad en horas:', so.uptime() / 3600);

