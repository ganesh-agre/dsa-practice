function removeAdejecent(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (i == string.length - 1 || string[i] !== string[i + 1]) {
      result += string[i];
    }
  }

  return result;
}

console.log(removeAdejecent("hello"));
