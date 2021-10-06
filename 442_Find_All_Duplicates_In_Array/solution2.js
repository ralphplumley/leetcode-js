/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const output = []

    for (const num of nums) {
        const indexToCheck = Math.abs(num) - 1

        if (nums[indexToCheck] < 0) output.push(Math.abs(num))
        else nums[indexToCheck] = -nums[indexToCheck]
    }

    return output
};
