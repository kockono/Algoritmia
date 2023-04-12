
function romanToInt(s: string): number {
  const Dictionary:any = { 
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    CM: 900,
    XC: 90,
    IV: 4
  }
  let numeros:string | number[] = [];
  let letrasRomanas = s.toString();

for (let i = 0; i < letrasRomanas.length; i++) {
    if( letrasRomanas.charAt(i) === "I" && letrasRomanas.charAt(i+1) === "V" ) {
      console.log("4");
      numeros.push(4);
      i++;
    }
    if (letrasRomanas.charAt(i) === "I" && letrasRomanas.charAt(i+1) === "X") {
      console.log( "9" )
      numeros.push(9);
      i++;
    }
    if (letrasRomanas.charAt(i) === "X" && letrasRomanas.charAt(i+1) === "L") {
      console.log( "40" )
      numeros.push(40);
      i++;
    }
    if (letrasRomanas.charAt(i) === "X" && letrasRomanas.charAt(i+1) === "C") {
      console.log( "90" )
      numeros.push(90);
      i++;
    }
    if (letrasRomanas.charAt(i) === "C" && letrasRomanas.charAt(i+1) === "D") {
      console.log( "400" )
      numeros.push(400);
      i++;
    }
    if (letrasRomanas.charAt(i) === "C" && letrasRomanas.charAt(i+1) === "M") { 
      console.log( "900" )
      numeros.push(900);
      i++;
    }else {
      numeros.push(Dictionary[letrasRomanas.charAt(i)]);
    }
     numeros.map((item:any) => item += item);
     console.log( numeros )
}
  return 5;
};