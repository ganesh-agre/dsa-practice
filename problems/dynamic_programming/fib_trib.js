function fibonacci(num, memo = {}) {
  if (num in memo) return memo[num];
  if (num === 0) return num;
  if (num === 1 || num === 2) return 1;
  memo[num] = fibonacci(num - 1) + fibonacci(num - 2) + fibonacci(num - 3);
  return memo[num];
}

console.log(fibonacci(5));
