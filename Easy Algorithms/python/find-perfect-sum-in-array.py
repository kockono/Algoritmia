from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
    # o(n)    
        num_dict = {}  # Diccionario para almacenar {valor: índice}
        for index, num in enumerate(nums):
            complemento = target - num  # Buscamos el número que falta para llegar al target
            
            if complemento in num_dict:  # Si ya está en el diccionario, encontramos la respuesta
                return [num_dict[complemento], index]
            
            num_dict[num] = index  # Guardamos el número actual en el diccionario
        
        return []
    # o(n²)    
    #    position_1 = 0
    #    position_2 = 0
    #    
    #    for i in range(len(nums)):  # Primer número
    #        for j in range(i + 1, len(nums)):  # Segundo número
    #            if nums[i] + nums[j] == target:
    #                position_1 = i
    #                position_2 = j
    #                return [i, j]  # Retornamos los índices
        
    