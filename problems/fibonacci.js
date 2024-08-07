function fibonacci(num) {
  let n1 = 0;
  let n2 = 1;
  for (let i = 0; i < 5; i++) {
    let temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }
  return n1;
}

function fibonacciRec(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num <= 1) return num;

  memo[num] = fibonacciRec(num - 1) + fibonacciRec(num - 2);
  return memo[num];
}

console.log(fibonacci(5));
console.log(fibonacciRec(8));
