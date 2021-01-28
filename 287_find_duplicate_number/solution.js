/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let dict = {}
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (dict.hasOwnProperty(n)) return n
        else dict[n] = n
    }
};