/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubArrayLen = function(nums, k) {
    if (nums.length === 0) return 0
    let result = 0
    let sum = 0

    let map = new Map()
    map.set(0, -1)

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        let diff = sum-k
        if (map.has(diff)) {
            result = Math.max(result, i - map.get(diff))
        }

        if (!map.has(sum)) {
            map.set(sum, i)
        }
    }

    return result
};