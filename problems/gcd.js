function getDivisers(num) {
  let divisers = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisers.push(i);
    }
  }
  return divisers;
}

function gcd(num1, num2) {
  const num1Divisers = getDivisers(num1);
  const num2Divisers = getDivisers(num2);
  const commonDivisers = num1Divisers.filter((num1Diviser) => {
    return num2Divisers.includes(num1Diviser);
  });
  return commonDivisers[commonDivisers.length - 1];
}

function gcdRec(num1, num2) {
  if (num1 === num2) return num1;
  if (num1 > num2) return gcd(num1 - num2, num2);
  if (num2 > num1) return gcd(num1, num2 - num1);
}

console.log(gcd(42, 56));
console.log(gcdRec(42, 56));
