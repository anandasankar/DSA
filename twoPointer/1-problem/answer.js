const sumOfArrayPair = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let sum = arr[i] + arr[j];

    if (sum === target) {
      return [arr[i], arr[j]];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }

  return [-1, -1];
};

console.log(sumOfArrayPair([2, 7, 11, 15], 9));
