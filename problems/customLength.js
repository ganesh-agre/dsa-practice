function customLength(array) {
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    length += 1;
  }
  return length;
}

function customLengthRec(array, index = 0) {
  if (index === array.length) return index;
  return customLengthRec(array, index + 1);
}

console.log(customLength([1, 2, 3, 5]));
console.log(customLengthRec([1, 2, 3, 5]));
