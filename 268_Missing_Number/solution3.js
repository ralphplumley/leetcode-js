/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    /* Naive
    TC: n*log n + n => n*log n
    SC: O(1)
    nums.sort()
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== i) return i
    }
    */

    /*
    Bit Shifting
    TC: O(n)
    SC: O(1)
    */

    let x = nums.length
    for (let i = 0; i < nums.length; ++i) {
        const xored = i ^ nums[i]
        x ^= xored
    }

    return x
};