/**
 * @param {number} n Cantidad de números a evaluar
 * @return {string[]} Arreglo de strings con las respuestas ejemploe ["1", "2", "Fizz", "4", "Buzz"]
 * @description https://leetcode.com/problems/fizz-buzz/
 * Problema 412 de Leetcode
 *  Given an integer n, return a string array answer (1-indexed) where:
 *  answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 *  answer[i] == "Fizz" if i is divisible by 3.
 *  answer[i] == "Buzz" if i is divisible by 5.
 *  answer[i] == i (as a string) if none of the above conditions are true.
 */
var fizzBuzz = function(n:number): string[] {
    let answers:string[] = [];
    
    for (let i = 1; i < n+1; i++) {
        
        if(i % 5 == 0 && i % 3 == 0 ) {
            answers.push("FizzBuzz");
        }else if(i % 3 == 0) {
            answers.push("Fizz");
        }
        else if(i  % 5 == 0) {
            answers.push("Buzz");
        }
        else {
            answers.push(i.toString());
        }
        
    }

    return answers;
    
};