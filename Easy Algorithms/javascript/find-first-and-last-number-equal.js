
/**
 * @description Valida si el primer y ultimo numero son iguales
 * @author Chris Cobos
 * @param {string} x           - Un numero entero cualquiera a evaluar
 * @returns {boolean}          - Si el valor es true el primer y ultimo numero son iguales, si es false no lo son
 * @var {string} numberString  - Convierte el numero a string para poder manejarlo con chartAt
 * @var {string} numberLength  - Obtiene la longitud del numero para poder obtener de esta manera la ultima posición
 */
function isPalindrome(x) {
    // Convertir el numero a string para poder manejarlo con chartAt
    let numberString = x.toString();
    // Obtener la longitud del numero para poder obtener de esta manera la ultima posición
    let numberLength = numberString;
    // Convertir el string a number para poder operar con el
    numberLength = numberLength.length.toString();
    length = parseInt(numberLength);

    // Primera posicion              // Ultima Posicion
    return numberString.charAt(0) == numberString.charAt(length-1) ? true : false;
};

console.log( isPalindrome(1000021) )
