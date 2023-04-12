// Valida si el primer y ultimo numero son iguales
function isPalindrome(x: number): boolean {
    let numberString:string = x.toString();
    let numberLength:string = numberString;
    numberLength = numberLength.length.toString();
    length = parseInt(numberLength);
    // Primera posicion          // Ultima Posicion
    if(numberString.charAt(0) == numberString.charAt(length-1))
        return true;
    else
        return false;
};

console.log( isPalindrome(1000021) );