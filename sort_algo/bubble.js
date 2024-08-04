function bubbleSort(arr) {
  let isSwap;
  do {
    isSwap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwap = true;
      }
    }
  } while (isSwap);

  return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr));
