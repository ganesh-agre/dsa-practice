function balanceParanthesis(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      counter += 1;
    } else {
      counter -= 1;
    }
  }
  return counter === 0;
}

function balanceParanthesisRec(arr, i = 0, counter = 0) {
  if (arr.length === i) return counter === 0;

  if (counter < 0) return false;

  if (arr[i] === "(") {
    return balanceParanthesisRec(arr, i + 1, counter + 1);
  } else {
    return balanceParanthesisRec(arr, i + 1, counter - 1);
  }
}

let arr = ["(", "(", ")", "(", ")", ")"];
console.log(balanceParanthesis(arr));
console.log(balanceParanthesisRec(arr));
