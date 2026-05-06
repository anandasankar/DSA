//Triplet Sum to Zero

// Brut Force ----->

let arr = [-1, 0, 1, 2, -4];

const sumOfTriplet = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; i <= arr.length; j++) {
      for (let k = j + 1; j <= arr.length; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum === 0) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
  return false;
};

console.log(sumOfTriplet(arr));

// First find the Unique pair

const uniquePairs = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  const result = [];

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      result.push([arr[left], arr[right]]);

      // skip duplicates
      while (left < right && arr[left] === arr[left + 1]) left++;
      while (left < right && arr[right] === arr[right - 1]) right--;

      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};

//Find Triplet in Array

const tripletSum = (arr) => {
  //1: Sort
  arr.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    //Skip duplicate in i
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);

        //skip duplicate
        while (left < right && arr[left] === arr[left + 1]) {
          left++;
        }

        while (left < right && arr[right] === arr[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

console.log(tripletSum(arr));
