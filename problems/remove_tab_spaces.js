function RTS(string) {
  result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " " && string[i] !== "\t") {
      result += string[i];
    }
  }
  return result;
}

function removeTASRec(inputString, index = 0) {
  if (index == inputString.length) {
    return "";
  }
  if (inputString[index] !== " " && inputString[index] !== "\t") {
    return inputString[index] + removeTASRec(inputString, index + 1);
  } else {
    return removeTASRec(inputString, index + 1);
  }
}

console.log(RTS("Hello JS"));
console.log(removeTASRec("Hello World"));
