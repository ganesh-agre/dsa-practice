function countVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if ("aeiou".indexOf(string[i]) !== -1) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("hello"));
