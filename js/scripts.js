
const symbols = ["I", "V", "X", "L", "C", "D", "M"]
function romanNumerals(number) {
  let result = "";
  const userInput = number.split("");
  const reverseArray = userInput.reverse();
  
  reverseArray.forEach(function(element, index) {
    let eleParse = parseInt(element);
    if (eleParse <= 3) {
      for (let i = 0; i < eleParse; i++) {
        result = symbols[0 + (2*index)] + result;
      }
    }
    else if (eleParse === 4) {
      result = symbols[0 + (2*index)] + symbols[1 + (2*index)] + result;
    }

    else if (eleParse <= 8) {
      for (let i = 0; i < (eleParse - 5); i++) {
        result = symbols[0 + (2*index)] + result;
      }
      result = symbols[1 + (2*index)] + result;
    }
    
    else if (eleParse === 9) {
      result = symbols[0 + (2*index)] + symbols[2 + (2*index)] + result;
    }

  });
  
  return result;
}


