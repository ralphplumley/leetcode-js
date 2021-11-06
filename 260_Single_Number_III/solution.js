/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let n = nums.length,
        seen = 0

    for (let i = 0; i < n; ++i) {
        seen = seen ^ nums[i]
    }

    let mask = 1
    while (!(seen & mask)) {
        mask = mask << 1
    }

    let a = 0,
        b = 0

    for (let i = 0; i < n; ++i) {
        if (nums[i] & mask) {
            a = a ^ nums[i]
        } else {
            b = b ^ nums[i]
        }
    }

    return [a, b]
};
