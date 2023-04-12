function longestCommonLetters(strs: string[]): string {
  const primerPalabra = strs[0];
  let letrasEnComun:any[] = []

  if( strs.length === 1 ) return primerPalabra.charAt(0);

   for (let i = 0; i < strs.length -1; i++) {
      compararPalabra(primerPalabra, strs[i+1], letrasEnComun);
   }

   if( letrasEnComun.length === 1 ) return strs[0];
   return encontrarLaPalabraMasLargaEnComun(letrasEnComun);;
};

longestCommonLetters(["flower","flow","flight"]);

function compararPalabra(primerPalabra:string, siguientePalabra:string, letrasEnComun:any[]) { 
  let letrasEncontradas:any[] = []
  let sizeComparasion = primerPalabra.length > siguientePalabra.length ? siguientePalabra.length : primerPalabra.length;

  for (let j = 0; j < sizeComparasion; j++) {
    primerPalabra.charAt(j) === siguientePalabra.charAt(j) ? letrasEncontradas.push(primerPalabra.charAt(j)) : null;
  }
  letrasEnComun.push(letrasEncontradas);
  console.log("Letras Encontradas: "+ letrasEncontradas )
}

function encontrarLaPalabraMasLargaEnComun(letrasEnComun:any[]) {
  // Si la palabra a es menor que la palabra b, entonces a es la palabra mas corta
  let prefijoComun = letrasEnComun.reduce((a, b) => a.length > b.length ? b : a).join("");
  console.log( "prefijoComun" );
  console.log( prefijoComun );
  return prefijoComun;
} 