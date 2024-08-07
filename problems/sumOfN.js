function sumOfN(num) {
  let result = 0;
  for (let index = 1; index <= num; index++) {
    result += index;
  }
  return result;
}

console.log(sumOfN(2));
