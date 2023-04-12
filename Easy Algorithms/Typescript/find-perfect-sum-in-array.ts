
// Dada una matriz de números enteros y un objetivo entero, devuelve índices de los dos números de modo que sumen el objetivo.
// Puede suponer que cada entrada tendría exactamente una solución y no puede usar el mismo elemento dos veces.
// Puede devolver la respuesta en cualquier orden.

 function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length - 1; i++) {
       for (let j = 0; j < nums.length - 1; j++) {
            if(nums[i] + nums[j+1] == target && i != (j+1)) {
                 let encontrados = [i, j+1];
                return encontrados;
            }
       }
   }
   return[];
};

