/**
 * Spanish: Encontrar si el numero mandado es un palindromo, un palindromo es cuando se lee al derecho y alreves
 * English: Find if a number is a palindrome
 * @param x 
 * @returns {true | false}
 */

function isPalindromes(x: number): boolean {
    // Se convertira a string
    let numberString:string = x.toString();
    // Separamos cada numero, la revertimos, y las unimos EJEMPLO:
    // "123" = 1,2,1 => 1,2,1 => "121"
    let palindrome = numberString.split("").reverse().join("");
    // Si la palabra recibida es igual que la invertida, nos devolvera un true;
    return palindrome === numberString;
};

console.log( isPalindromes(121) )
