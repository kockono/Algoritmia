/**
 * #20 https://leetcode.com/problems/valid-parentheses/
 * Lo que tenemos que hacer es que ciere al mismo tiempo
 */
function isValid(s: string): boolean {

    let stack: string[] = [];

  // Si la longitud es impar, no puede ser valido, Si el primer caracter es un parentesis de cierre, no puede ser valido
    if(s.length % 2 !== 0 || s[0] === ']' || s[0] === ')' || s[0] === '}') return false;

    for (let i = 0; i < s.length; i++) { 
        // Si es un parentesis de apertura, lo agregamos al stack.
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        // Si es un parentesis de cierre, tenemos que verificar que el ultimo parentesis abierto sea el mismo.
        } else {

            if(s[i] === ")" && stack[stack.length - 1] === "(") {
                stack.pop();
            }else if(s[i] === "]" && stack[stack.length - 1] === "[") {
                stack.pop();
            }else if(s[i] === "}" && stack[stack.length - 1] === "{") {
                stack.pop();
            }else {
                return false;
            }
        }
        
    };
        // Sí el tamaño del stack es 0, significa que se cerraron todos los parentesis
        return stack.length === 0;
}
