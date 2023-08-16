/**
 * Problema 217
 * @description Dado un array de enteros, determinar si el array contiene duplicados.
 * @param nums array de enteros
 * @returns {boolean} si el array contiene duplicados retornara un tru y false en caso contrario.
 * Solucion: Se recorre el array y se compara cada elemento con los demas elementos del array, si se encuentra un elemento igual se retorna true.
 */

function containsDuplicate(nums: number[]): boolean {

    for (let i = 0; i < nums.length; i++) {          
        for (let j = 0; j < nums.length; j++) {
           // Compara la posición i con la posición j, si son iguales y no son la misma posición retorna true.
            if (i !== j && nums[i] === nums[j]) return true;
        }
    }
    
    return false;

};