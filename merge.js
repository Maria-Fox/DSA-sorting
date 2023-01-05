function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let sortedArr = [];

  // while there are values in both arrays
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      sortedArr.push(arr1[i])
      i++;
    } else {
      sortedArr.push(arr2[j])
      j++
    }
  };

  // runs if j runs out of length
  while(i < arr1.length){
    sortedArr.push(arr1[i]);
    i++;
  };

  // runs if i runs out of length
  while(j < arr2.length){
    sortedArr.push(arr2[j]);
    j++
  };

  console.log("sorted as", sortedArr);
  return sortedArr;
}

// using recursion
function mergeSort(arr) {
  // split into half
  // break down/ send back in until arr.length <=1;
  // do left side
  // do right side
  // merege

  // break case for recursion
  if(arr.length <= 1) return arr;

  // === number of index.
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  console.log("left is", left)
  let right = mergeSort(arr.slice(mid));
  console.log("right is ", right);

  return merge(left, right);
}

module.exports = { merge, mergeSort};

