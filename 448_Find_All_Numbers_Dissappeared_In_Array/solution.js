/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // loop through nums
        // overwrite nums[i] with -1

    // loop through nums again
        // if nums[i] isn't -1, push that index into output array


    for (let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i]) - 1
        nums[idx] = -Math.abs(nums[idx])
    }

    let output = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) output.push(i+1)
    }

    return output
};