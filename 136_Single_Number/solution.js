/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    let a = 0
    nums.forEach(num => {
        return a ^= num
    })
    return a
};