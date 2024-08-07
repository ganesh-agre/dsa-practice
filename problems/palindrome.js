function palanidrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return "String is no palindrome";
    }
  }
  return "string is palindrome";
}

function palindromeRec(string, index = 0) {
  if ((index = string.length / 2)) return "string is palindrome";
  if (string[index] !== string[string.length])
    return "string is not palindrome";
  return palindromeRec(string, index + 1);
}

console.log(palanidrome("naman"));
console.log(palindromeRec("ganesh"));
