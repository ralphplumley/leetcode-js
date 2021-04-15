/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    // initialize our variables using the first element
    let currentSubarray = nums[0],
        maxSubarray = nums[0]

    // start with the 2nd element since we already used the first one
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]

        // if current subarray is negative, throw it away
        // otherwise, keep adding to it
        currentSubarray = Math.max(num, currentSubarray + num)
        maxSubarray = Math.max(maxSubarray, currentSubarray)
    }

    return maxSubarray
};

/*
    Time complexity: O(N) where N is the length of the nums
    Space complexity: O(1) we are only using 2 variables, and not storing additional arrays
 */

let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))

