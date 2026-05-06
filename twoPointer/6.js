//Three sum closest number

const threeSumClosest = (arr, target) => {
  arr.sort((a, b) => a - b);
  let closest = arr[0] + arr[1] + arr[2];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }  
    }
  }

  return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
