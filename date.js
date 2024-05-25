// 1. Crear un objeto Date con la fecha actual
let fechaActual = new Date();

// 2. Imprimir en la consola el año actual
let añoActual = fechaActual.getFullYear();
console.log(añoActual); // Imprime el año actual, por ejemplo: 2024

// 3. Imprimir en la consola el mes actual (recordar que los meses empiezan en 0)
let mesActual = fechaActual.getMonth();
console.log(mesActual); // Imprime el mes actual (0 para enero, 1 para febrero, ..., 11 para diciembre)

// 4. Crear una nueva fecha que sea el 1 de enero del próximo año
let próximoAño = añoActual + 1;
let fechaPróximoAño = new Date(próximoAño, 0, 1); // Enero es el mes 0

console.log(fechaPróximoAño); // Imprime la fecha: 1 de enero del próximo año
