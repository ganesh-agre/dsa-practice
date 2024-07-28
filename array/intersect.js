function intersect(arr1, arr2) {
  let obj = {};
  let intersectArr = [];
  for (let index = 0; index < arr2.length; index++) {
    if (obj[arr2[index]]) {
      obj[arr2[index]]++;
    } else {
      obj[arr2[index]] = 1;
    }
  }

  for (let index = 0; index < arr1.length; index++) {
    if (obj[arr1[index]]) {
      intersectArr.push(arr1[index]);
      obj[arr1[index]]--;
    }
  }

  console.log(intersectArr);
}

intersect([1, 2, 2, 3, 4, 4], [2, 2, 4, 5, 5, 6, 2000]);
