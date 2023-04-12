/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

let strss:string[] = ["flower","flow","flight"]
let letters:string[] = [];

function longestCommonPrefix(strs: string[]): string {
    for (let i = 0; i < strs.length; i++) {
        let temp = strs[i].split("")
        // letters.push(temp);
        
    }

    return "";
};

console.log( longestCommonPrefix(strss));
