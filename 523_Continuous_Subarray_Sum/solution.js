/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function(nums, k) {
    // create map
    // create sum variable
    // for each num in nums
        // increment sum by num
        // calculate sum%k
        // if sum%k is in map
            // return true
        // else
            // set sum%k : i in map

    // return false

    let map = new Map()
    map.set(0, -1)
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        sum += num

        if (k !== 0) {
            sum = sum % k
        }
        if (map.has(sum)) {
            if (i - map.get(sum) > 1) {
               return true
            }
        } else {
            map.set(sum, i)
        }
    }

    return false
};

let arr = [23,2,4,6,7]
let k = 6
console.log(checkSubarraySum(arr, k))