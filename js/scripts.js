
const symbols = ["I", "V", "X", "L", "C", "D", "M"]
function romanNumerals(number) {
  let result = "";
  const userInput = number.split("");
  
  userInput.forEach(function(element, index) {
    let eleParse = parseInt(element);
    if (eleParse === 0)
    {
      
    }
    if (eleParse <= 3) {
      for (let i = 0; i < eleParse; i++) {
        result = result.concat(symbols[0 + (2*index)]);
        
      }
    }

    else if (eleParse === 4) {
      result = result.concat(symbols[1 + (2*index)])
      result = symbols[0 + (2*index)] + result;
    }

    else if (eleParse <= 8) {
      result = result.concat(symbols[1 + (2*index)]);
      for (let i = 0; i < (eleParse - 5); i++) {
        result = result.concat(symbols[0 + (2*index)]);
      }
    }

    else if (eleParse === 9) {
      result = symbols[0 + (2*index)] + symbols[2 + (2*index)];
    }

  });
  
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



