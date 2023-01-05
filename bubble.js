// highest values bubble to the top
function bubbleSort(nums) {
  // outer loop only gets one number to the top
  for(let i = 0; i < nums.length; i++){

    // loop again to bubble all numbers. -1 to acct for the outter loop
    for(let j = 0; j < nums.length-i ;j++){
      if(nums[j] > nums[j+1]){
        // console.log(nums[j], "is grater than", nums[j+1])
        // hold current value in variable
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
      }
    }
  }

  console.log(nums);
  return nums;
}

module.exports = bubbleSort;

// we have to do a nested loop to go through the full nums array. Otherwise, it will only bubble one number to the top.
// this is O(n^2) - quadratic.
