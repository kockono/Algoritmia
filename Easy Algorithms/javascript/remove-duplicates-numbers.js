/**
 * El bucle for recorre el arreglo desde el primer elemento hasta el penúltimo elemento (i < nums.length - 1), 
 * comparando cada elemento con su sucesor.
 * Si se encuentra un par de elementos idénticos (duplicados), se elimina el segundo elemento (con splice(i + 1, 1)) y se reduce i
 * en uno para que en la siguiente iteración se compare el elemento actual (que era el anterior) con el siguiente elemento
 * después del eliminado.
 * Si no se encuentra ningún par de elementos duplicados, se continúa con la siguiente iteración del bucle sin modificar i
 * @param {number[]} nums - Arreglo de números a comprar
 * @var {number} i        - Índice del elemento actual
 * @returns               - Tamaño del arreglo sin duplicados
 */
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
        nums.splice(i + 1, 1);

    // La razón por la que se utiliza i-- después de eliminar un elemento del arreglo con splice es para evitar que se omita un 
    // elemento al comparar el siguiente par de elementos. Aquí está cómo funciona la función:
        i--;
    }
  }
  return nums.length;
}

/**
 * Función alternativa que utiliza el método Set para eliminar los duplicados
 * @param {number[]} nums - Arreglo de números a comprar
 * @returns - Tamaño del arreglo sin duplicados
 */
function removeDuplicates_2(nums) {
  let newArray =  [...new Set(nums)];
  return newArray.length;
};