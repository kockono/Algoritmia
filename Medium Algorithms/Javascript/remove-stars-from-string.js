// Eliminar los asteriscos y la letra a la izquierda del asterisco

/**
 * 100% Aprovechamiento de Memoria
 * ------------------------------------------------------------ Explicación --------------------------------------------
 * 1. Por cada (*) que encuentre, suma 1 al avariable contarStar, sí encuentra 10 (*) ignorara las 10 siguientes letras
 * 2. Si encuentra una letra, la agrega a la variable palabraFinal, sí encuentra una letra y contarStar es mayor a 0, 
 * no la agrega
 * 
 * @param {string} s              - Palabra a evaluar
 * @var   {string} palabraFinal   - Palabra final sin asteriscos
 * @var   {number} contarEstrella - Contador de asteriscos
 * 
 * @returns - Palabra final sin asteriscos
 */
function removeStars(s) {
  let palabraFinal = '';
  let contarEstrella = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === '*') contarEstrella++;
      else if (contarEstrella) contarEstrella--;
      else palabraFinal = s[i] + palabraFinal;
  }
  return palabraFinal;
}
/**
 * Optimizado
 * @var {string[]} obtenerLetras - Arreglo de letras de la palabra
 * @var {number}   movePosicion  - Mover 2 posiciones cada numero del arreglo, porque se removieron 2 letras
 * @var {number}   j             - Índice del elemento actual
 * @returns - Palabra final sin asteriscos
 */
function removeStars2(s) {

  let obtenerLetras = s.split('');
  let movePosicion = 0;
  
  for (let j = 0; j < s.length; j++) {
    if( s.charAt(j) === "*" ) {
      // Elimina el *(se le resta 2 posiciones después de cada iteración porque se recorre las letras)
      obtenerLetras.splice(j-movePosicion, 1)
      // Elimina la letra (se le resta 2 posiciones después de cada iteración porque se recorre las letras)
      obtenerLetras.splice(j-1-movePosicion, 1)
      // Mover 2 posiciones cada numero del arreglo, porque se removieron 2 letras
      movePosicion += 2;
    }
  }

  const palabraFinal = obtenerLetras.join("");
  console.log(palabraFinal);
  return palabraFinal;
};
/**
 * @author Chris Cobos
 * Bien Explicado pero no super otpimizado
 * @param {string} s - Palabra a evaluar
 * @var {string[]} obtenerLetras    - Arreglo de letras de la palabra
 * @var {number[]} obtenerPosiciones - Arreglo de posiciones de los asteriscos
 */
function removeStarsTLE(s) {
  // Convierto la palabra en un arreglo de cada letra para manipularlo mejor
  let obtenerLetras = s.split('');
  let obtenerPosiciones = [];

  for (let j = 0; j < s.length; j++) {
    if( s.charAt(j) === "*" ) {
      // Obtengo las posiciones de los *
      obtenerPosiciones.push(j)
    }
  }

  const ciclos = obtenerPosiciones.length;
  let movePosicion = 2;
  for (let i = 0; i < ciclos; i++) {
      // Elimina el * y la letra de la izquierda
      obtenerLetras.splice(obtenerPosiciones[0], 1)
      obtenerLetras.splice(obtenerPosiciones[0]-1, 1)
      // Elimina la posición del asterisco encontrado
      obtenerPosiciones.shift()
      // Mover 2 posiciones cada numero del arreglo porque se removieron 2 piezas
      obtenerPosiciones[0] = obtenerPosiciones[0]-movePosicion;
      movePosicion += 2;
  }
  const palabraFinal = obtenerLetras.join("");
  return palabraFinal;
};