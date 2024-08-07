function balanceParanthesis1(array) {
  let stack = [];
  let bracketMap = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let i = 0; i < array.length; i++) {
    let char = array[i];
    if (bracketMap[char]) {
      stack.push(char);
    } else if (Object.values(bracketMap).includes(char)) {
      if (stack.length === 0 || bracketMap[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

let array = ["[", "(", "{", "}", ")", "]"];
console.log(balanceParanthesis1(array));
