/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // cyclic sort
    let i = 0
    const n = nums.length
    while (i < n) {
        const j = nums[i]
        if (nums[i] < n && nums[i] !== nums[j]) {
            // swap
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i += 1
        }
    }

    // loop through, return i when nums[i] !== i
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) return i
    }

    return n
};