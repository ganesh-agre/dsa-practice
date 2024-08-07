function reverseString(string) {
  result = "";
  for (let index = string.length - 1; index >= 0; index--) {
    result += string[index];
  }
  return result;
}

console.log(reverseString("hello"));
