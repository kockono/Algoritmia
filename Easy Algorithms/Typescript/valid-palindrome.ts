/**
 * #125 Valid Palindrome
 * @param {string} s
 * @return {boolean}
 * Manera numero 1
 */
const isPalindromeTs = (s:string): boolean => {
  s = s.toLowerCase();
  s = removeNonAlphanumeric(s);

  // Original Word === Reversed Word
  return s === s.split('').reverse().join('');
};



/**
 * #125 Valid Palindrome
 * @param {string} s
 * @return {boolean}
 * Manera numero 2
 */

const isPalindromeTs2 = (s:string): boolean => {
  s = s.toLowerCase();
  s = removeNonAlphanumeric(s);
  
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  
  return true;
};

function removeNonAlphanumeric(inputString:string): string {
  return inputString.replace(/[^a-zA-Z0-9]/g, '');
  }