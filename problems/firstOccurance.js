function FindIndex(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return i;
    }
  }
}

function FindIndexRec(string, char, index = 0) {
  if (string[index] === char) return index;

  return FindIndexRec(string, char, index + 1);
}

console.log(FindIndexRec("hello", "l"));
console.log(FindIndexRec("hello", "e"));
