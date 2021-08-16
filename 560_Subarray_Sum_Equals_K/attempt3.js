/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const map = new Map()
    map.set(0, 1)

    let sum = 0,
        counter = 0

    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i]
        let prefixSum = sum - k
        if (map.has(prefixSum)) counter += map.get(prefixSum)

        const valToSet = map.get(sum) ? map.get(sum) : 0
        map.set(sum, valToSet + 1)
    }

    return counter

};

const arr = [1,2,3,4,4,3,2,1]
console.log(subarraySum(arr, 3))
