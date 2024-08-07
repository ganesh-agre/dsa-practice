function power(number, power) {
  let result = 1;
  for (let index = 0; index < power; index++) {
    result = result * number;
  }
  return result;
}

function powerRec(number, power) {
  if (power === 0) return 1;
  return number * powerRec(number, power - 1);
}

console.log(power(2, 2));
console.log(powerRec(2, 3));
