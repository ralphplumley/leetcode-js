/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
    let lastNonZeroFoundAt = 0
    let curr = 0

    while (curr < nums.length) {
        if (nums[curr] !== 0) {
            [nums[lastNonZeroFoundAt], nums[curr]] = [nums[curr], nums[lastNonZeroFoundAt]]
            lastNonZeroFoundAt += 1
        }
        curr += 1
    }
};

console.log(moveZeroes([0,1,3,0,5]))