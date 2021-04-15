/*
DP
 */

const maxSubArray = function(nums) {
    let max = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const sum =  Math.max(nums[i], nums[i] + nums[i - 1]);
        max = Math.max(sum, max)
        nums[i] = sum
    }

    return max
};

let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))