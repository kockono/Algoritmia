/**
 * 
 * 
 * @param s 
 * @returns 
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 */
function romanToInt(s: string): number {

  let numberRomans = s.split('');
  
  let resultado = 0;
  let anterior  = 0;
  let actual    = 0;

  const romanNumbers:any = { 
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  for (let i = s.length; i > 0; i--) {

    anterior = romanNumbers[s[i-2]] || 0;
    actual   = romanNumbers[s[i-1]];

    if(actual === anterior){
      resultado += actual;
    }else if(actual  === 5 && anterior === 1){
      resultado += 4;
      i--;
    }else if(actual  === 10 && anterior === 1){
      resultado += 9;
      i--;
    }else if(actual  === 50 && anterior === 10){
      resultado += 40;
      i--;
    }else if(actual  === 100 && anterior === 10){
      resultado += 90;
      i--; 
    }else if(actual  === 500 && anterior === 100){
      resultado += 400;
      i--;
    }else if(actual  === 1000 && anterior === 100){
      resultado += 900;
      i--;
    }else{
      resultado += actual;
    }

  }

  return resultado;
};