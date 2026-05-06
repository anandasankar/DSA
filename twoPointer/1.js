// Problem:
// Given a 1-indexed sorted array (non-decreasing),
// find two numbers such that they add up to the target.

// Example:
// Input:  [2, 7, 11, 15], target = 9
// Output: [2, 7]

// Approach (Two Pointers):
// - Start one pointer at the beginning (left)
// - Start another pointer at the end (right)
// - Calculate sum = numbers[left] + numbers[right]
//   - If sum == target → return the pair
//   - If sum < target → move left pointer forward
//   - If sum > target → move right pointer backward

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
