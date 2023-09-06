// 
// * El objetivo de este script es generar un algoritmo que compare dos parámetros, ambos de tipo 
// * Array, dependiendo del resultado de la comparación el script debe imprimir uno u otro valor
// * siguiento las siguientes especificaciones: 
// *
// * El script debe imprimir -1 cuando la longitud del segundo array sea mayor que la del primero
// * El script debe imprimir 0 cuando ambos arrays sean iguales tanto en longitud como en contenido
// * El script debe imprimir 1 cuando la longitud del primer array sea mayor que la del segundo
// * El script debe imprimir 2 cuando la longitud de ambos arrays sea la misma pero el contenido entre ellos sea diferente
// * El script debe retornar un error cuando alguno de los parámetros sea inválido 
// *

/**
 * @var {number[] | string[]} array 
 * @return 
 */
const result = [
	 !isBiggerFirstArray(array, array2),  	 // -1
    sameSizeAndContent(array, array2),  	 // 0
    isBiggerFirstArray(array, array2),  	 // 1
		sameContentDiffrentSize(array, array2) // 2
]

function compareArrays(array, array2) {
    let message = "El parametro es invalido";
    let i = 0;

    try {
      
      if(!Array.isArray(array) || !Array.isArray(array2)) {
        message = "El dato insertado, no es valido, inserte un valor correcto";
      }

      while (!result[i]) {

					if (result[i]) {
							message = i.toString();
							break; // Termina el bucle cuando encuentra el primer resultado verdadero
					}
            i++;
        }

    } catch(error) {
      return message;
    }

    return message;
    
  }

	 /** 
   * @var {number[] | string[]} array 
	 * @var {number[] | string[]} array2
	 * @return {boolean} Si el tamaño es el mismo pero el contenido es diferente;
   */
  function sameSizeAndContent(array, array2) {
    return sameSizeArray(array, array2) && sameContentArray(array, array2);
  }

	function sameSizeDiffrentContent(array, array2) {
    return sameSizeArray(array, array2) && !sameContentArray(array, array2);
  }
  
  function isBiggerFirstArray(array, array2) {
    return array.length > array2.length;
  }

  function sameSizeArray(array, array2) {
    return array.length === array2.length;
  }
  /**
   * @return {boolean} Si todos los elementos son iguales, la función every devolverá true
   */
  function sameContentArray(array1, array2) {
    return array1.every((element, index) => element === array2[index]);
}

  // Caso de uso 1 Ambos son iguales mismo tamaño mismo contenido
  console.log("Caso de uso 1")
   let casoDeUso = [1,2,3,4,5,6];
   let CasoDeUso2 = [1,2,3,4,5,6];
  comparArrays(casoDeUso, CasoDeUso2);
  // Caso de uso 2 Ambos son iguales mismo tamaño pero diferente contenido
  console.log("Caso de uso 2")
  casoDeUso  = [1,2,3,4,4,6];
  CasoDeUso2 = [1,2,3,4,5,6];
  comparArrays(casoDeUso, CasoDeUso2);
  // Caso de uso 3 Tamaño mayor el primer array, el resultado debe ser "1"
  console.log("Caso de uso 3")
  casoDeUso  = [1,2,3,4,5,6,5];
  CasoDeUso2 = [1,2,3,4,5,5];
  comparArrays(casoDeUso, CasoDeUso2);
  // Caso de uso 4 Tamaño mayor segundo array, el resultado debe ser "-1"
  console.log("Caso de uso 4")
  casoDeUso  = [1,2,3,4,5,6];
  CasoDeUso2 = [1,2,3,4,5,5,5];
  comparArrays(casoDeUso, CasoDeUso2);
  // Caso de uso 5 no es un arreglo, enviaron letras
  console.log("Caso de uso 5")
  casoDeUso  = "asdf"
  CasoDeUso2 = "a"
  comparArrays(casoDeUso, CasoDeUso2);
  // Caso de uso 6 no es un arreglo, enviaron booleanos
  console.log("Caso de uso 6")
  casoDeUso  = true
  CasoDeUso2 = false
  comparArrays(casoDeUso, CasoDeUso2);
  // Caso de uso 7 no es un arreglo, enviaron numeros
  console.log("Caso de uso 7")
  casoDeUso  = 12341245
  CasoDeUso2 = 2345345
  comparArrays(casoDeUso, CasoDeUso2);
  // Caso de uso 8 no es un arreglo, enviaron numeros
  console.log("Caso de uso 8")
  casoDeUso  = 12341245
  CasoDeUso2 = [2,3,4,5]
  comparArrays(casoDeUso, CasoDeUso2);
  // Caso de uso 9 no es un arreglo, enviaron numeros
  console.log("Caso de uso 9")
  casoDeUso  = [1,23]
  CasoDeUso2 = 2345345
  comparArrays(casoDeUso, CasoDeUso2);
  // Caso de uso 10 nomas se envio 1 dato
  console.log("Caso de uso 10")
  casoDeUso  = [1,23]
  comparArrays(casoDeUso);
  