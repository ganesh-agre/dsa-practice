function insertionSort(arr) {
  let currentValue;
  for (let i = 1; i < arr.length; i++) {
    currentValue = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSort(arr));
