/**
 * @description  #58 Encontrar el largo de la última palabra en una cadena de caracteres
 * @param {string} s  Cadena de caracteres
 * @returns  {number} Largo de la última palabra
 * 
 */
function lengthOfLastWordJs(s) {
    // Dividimos la cadena de caracteres en un arreglo
    let palabras = s.split(" "); 

    // Eliminamos los espacios vacios
    for (let i = palabras.length; i > -1; i--) {
        // Si la palabra es vacia, entonces la eliminamos
        if( palabras[i] == "") {
            palabras.splice(i, 1); // Eliminamos la palabra vacia
        }
    }
    return palabras[palabras.length -1].length;
};
