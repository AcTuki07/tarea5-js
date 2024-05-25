// 1. Crear una función llamada evaluarNota que tome una nota (número) como parámetro
function evaluarNota(nota) {
    // 2. Utilizar una estructura if, else para imprimir "Aprobado" si la nota es mayor o igual a 5 y "Reprobado" si es menor
    if (nota >= 5) {
      console.log("Aprobado");
    } else {
      console.log("Reprobado");
    }
  }
  
  // Ejemplos de llamadas a la función
  evaluarNota(7); // Imprime: Aprobado
  evaluarNota(4); // Imprime: Reprobado
  