
const symbols = ["I", "V", "X", "L", "C", "D", "M"]
function romanNumerals(number) {
  let result = "";
  userInput = parseInt(number);

  if (userInput <= 3) {
    for (let i = 0; i < userInput; i++) {
      result = result.concat(symbols[0]);
      
    }
  }

  else if (userInput <= 8) {
    result = result.concat(symbols[1]);
    for (let i = 0; i < (userInput - 5); i++) {
      result = result.concat(symbols[0]);
    }
  }

  
  return result;
}
 
/*
I  symbol[0]     X  symbol[2]
II      XX
III     XXX if number <= 3
IV      XL if == 4
V   symbol[1]   L   symbol[3]if number <= 8
VI      LX
VII     LXX
VIII    LXXX
IX       XC if == 9
X     symbol[2]    C  symbol[4]
 concat(symbols[0],symbols[2]) + concat(symbols[2],symbols[4])
IX
XC 
XC   IX
*/



