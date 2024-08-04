function merge(arr) {
  if (arr.length == 1) return arr;

  let middle = arr.length / 2;
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return mergeSort(merge(left), merge(right));
}

function mergeSort(left, right) {
  let result = [];
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      result.push(left[leftPointer]);
      leftPointer++;
    } else {
      result.push(right[rightPointer]);
      rightPointer++;
    }
  }
  return result
    .concat(left.slice(leftPointer))
    .concat(right.slice(rightPointer));
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(merge(arr));
