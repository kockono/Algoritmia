/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s: string): number {
    let contador = 0;
    let sized = [];
    let letrasIncluidas = [];

    let substring = s.split('');

    for (let i = 0; i < substring.length; i++) {
        
        for (let j = 0; j < substring.length; j++) {
                
                if (substring[i] !== substring[j] && i != j) {
                    letrasIncluidas.push(substring[i]);
                    if(letrasIncluidas.indexOf(substring[j]) == -1) {
                        contador++;
                    }
                }           
        }
        sized.push(contador);
        contador = 0;
    }

    let max = Math.max(...sized);
    return max;
};