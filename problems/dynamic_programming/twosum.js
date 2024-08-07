function twoSum(array, target) {
  let complement = {};
  for (let index = 0; index < array.length; index++) {
    let difference = target - array[index];
    if (difference in complement) {
      return complement[difference] + " " + index;
    } else {
      complement[array[index]] = index;
    }
  }
}

console.log(twoSum([2, 1, 3], 5));
