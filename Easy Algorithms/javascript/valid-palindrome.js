/**
 * #125 Valid Palindrome
 * @param {string} s
 * @return {boolean}
 * Manera numero 1
 */
var isPalindrome = function(s) {
  s = s.toLowerCase();
  s = removeNonAlphanumeric(s);

  // Original Word === Reversed Word
  return s === s.split('').reverse().join('');
};

function removeNonAlphanumeric(inputString) {
return inputString.replace(/[^a-zA-Z0-9]/g, '');
}

/**
 * #125 Valid Palindrome
 * @param {string} s
 * @return {boolean}
 * Manera numero 2
 */

var isPalindrome = function(s) {
  s = s.toLowerCase();
  s = removeNonAlphanumeric(s);
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  
  return true;
};

function removeNonAlphanumeric(inputString) {
return inputString.replace(/[^a-zA-Z0-9]/g, '');
}
