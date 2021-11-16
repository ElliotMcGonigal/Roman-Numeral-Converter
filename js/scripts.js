
const symbols = ["I", "V", "X", "L", "C", "D", "M"]
function romanNumerals(number) {
  let result = "";
  userInput = parseInt(number);

  for (let i = 0; i < userInput; i++) {
    result = result.concat(symbols[0]);
    
  }

  
  return result;
}

/*
I
II
III
IV
V
VI
VII
VIII
IX
X
 concat(symbols[0],symbols[2]) + concat(symbols[2],symbols[4])
IX
XC 
XC   IX
*/



