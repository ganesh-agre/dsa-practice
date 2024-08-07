function keyCount(array, key) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      count += 1;
    }
  }
  return count;
}

function keyCountRec(array, key, index = 0, count = 0) {
  if (index === array.length) return count;
  if (array[index] === key) {
    return keyCountRec(array, key, index + 1, count + 1);
  } else {
    return keyCountRec(array, key, index + 1, count);
  }
}

console.log(keyCount([1, 2, 3, 1, 5, 7, 8, 1, 1], 1));
console.log(keyCountRec([1, 2, 3, 1, 5, 7, 8, 1, 1], 1));
