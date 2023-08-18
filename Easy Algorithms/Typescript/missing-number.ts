/**
 * @param nums Numeros del 0 al n
 * @returns {number} Numero faltante
 */
function missingNumber(nums: number[]): number {
    // Suma de toda la secuenta tamaño del arreglo
    let sumTotal : number = 0;
    // Suma de todos los numeros del arreglo
    let sumNums  : number = 0;
    for (let i = 0; i < nums.length; i++) {
        sumNums  += nums[i];
        sumTotal += i+1;
    }
    // Obtener la diferencia entre la suma total y la suma de los numeros del arreglo para obtener el numero faltante
    return sumTotal - sumNums;
};