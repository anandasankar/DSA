// Removing Duplicate from Array
// Input [1,1,2,2,3,4.4]

const removeDuplicate = (arr) => {
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }

  return arr.slice(0, i + 1);
};

console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 4]));
