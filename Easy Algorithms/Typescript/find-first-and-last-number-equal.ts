
/**
 * Valida si el primer y ultimo numero son iguales
 * @author Chris Cobos
 * @param x Un numero entero cualquiera a evaluar
 * @returns {boolean} true si el primer y ultimo numero son iguales
 */
function isPalindrome(x: number): boolean {
    // Convertir el numero a string para poder manejarlo con chartAt
    let numberString:string = x.toString();
    // Obtener la longitud del numero para poder obtener de esta manera la ultima posición
    let numberLength:string = numberString;

    // Convertir el string a number para poder operar con el
    numberLength = numberLength.length.toString();
    length = parseInt(numberLength);

    // Primera posicion              // Ultima Posicion
    return numberString.charAt(0) == numberString.charAt(length-1) ? true : false;
};

console.log( isPalindrome(1000021) );