/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function(nums, k) {
    let map = new Map()
    map.set(0, 1)

    let count = 0,
        sum = 0


    nums.forEach(num => {
        sum += num

        let diff = sum - k
        if (map.get(diff)) {
            count += map.get(diff)
        }

        if (map.get(sum)) {
            map.set(sum, map.get(sum) + 1)
        } else {
            map.set(sum, 1)
        }

    })

    return count

};

let nums = [1]
let k = 0
console.log(subarraySum(nums, k))