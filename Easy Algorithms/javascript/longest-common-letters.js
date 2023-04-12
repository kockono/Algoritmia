/**
 * 
 * @param {string[]} strs - Array of strings
 * 
 * @var {string} primerPalabra - The first word of the array
 * @var {string} siguientePalabra - The next word of the array
 * @var {string} sizeComparasion - The size of the comparasion
 * @var {string[]} letrasEncontradas - The letters found in the comparasion
 * @var {string} letrasEnComun - The letters in common
 * 
 * @returns - The longest common prefix
 */

function longestCommonLetters(strs) {
  const primerPalabra = strs[0];
  let letrasEnComun = []

  if( strs.length === 1 ) return primerPalabra.charAt(0);

   for (let i = 0; i < strs.length -1; i++) {
      compararPalabra(primerPalabra, strs[i+1], letrasEnComun);
   }

   if( letrasEnComun.length === 1 ) return strs[0];
   return encontrarLaPalabraMasLargaEnComun(letrasEnComun);;
};

longestCommonLetters(["flower","flow","flight"]);

/**
 * 
 * @param {string} primerPalabra - The first word of the array
 * @param {string} siguientePalabra - The next word of the array
 * @param {string[]} letrasEnComun - The letters in common
 */

function compararPalabra(primerPalabra, siguientePalabra, letrasEnComun) { 
  let letrasEncontradas = []
  let sizeComparasion = primerPalabra.length > siguientePalabra.length ? siguientePalabra.length : primerPalabra.length;

  for (let j = 0; j < sizeComparasion; j++) {
    primerPalabra.charAt(j) === siguientePalabra.charAt(j) ? letrasEncontradas.push(primerPalabra.charAt(j)) : null;
  }
  letrasEnComun.push(letrasEncontradas);
  console.log("Letras Encontradas: "+ letrasEncontradas )
}

/**
 * 
 * @param {string[]} letrasEnComun - The letters in common
 * @returns - The longest common prefix
 */
function encontrarLaPalabraMasLargaEnComun(letrasEnComun) {
  // Si la palabra a es menor que la palabra b, entonces a es la palabra mas corta
  let prefijoComun = letrasEnComun.reduce((a, b) => a.length > b.length ? b : a).join("");
  console.log( "prefijoComun" );
  console.log( prefijoComun );
  return prefijoComun;
} 