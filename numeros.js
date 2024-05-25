//Crear una lista de 1 a 10
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Imprimir en la consola el tercer elemento del array.
const valor3 = numeros[2];
console.log(valor3);
//Agregar el número 11 al final del array.
numeros.push(11);
//Eliminar el primer elemento del array.
numeros.shift();
//Imprimir en la consola todos los elementos del array utilizando un bucle for.
for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
};
console.log(numeros);

