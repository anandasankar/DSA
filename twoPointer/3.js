const sortedArray = [-1, 2, 5, 8, 9];

const squareOfArray = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  let k = arr.length - 1;

  const result = new Array(arr.length);

  while (i <= j) {
    let leftSq = arr[i] * arr[i];
    let rightSq = arr[j] * arr[j];

    if (leftSq > rightSq) {
      result[k] = leftSq;
      i++;
    } else {
      result[k] = rightSq;
      j--;
    }
    k--;
  }

  return result;
};

console.log(squareOfArray(sortedArray));