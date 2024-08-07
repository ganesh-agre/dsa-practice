function coinSum(amount, array, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return true;
  if (amount < 0) return false;
  for (let i = 0; i < array.length; i++) {
    if (coinSum(amount - array[i], array, memo)) {
      memo[amount] = true;
      return true;
    }
  }
  memo[amount] = false;
  return false;
}

console.log(coinSum(5, [2, 3]));
