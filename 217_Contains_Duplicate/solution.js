/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (map.has(num)) {
            return true
        } else {
            map.set(num, 1)
        }
    }

    return false
};