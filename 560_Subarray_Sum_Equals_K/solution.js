/*
    create map
    set map[0]:1
    create count variable

    create sum variable
    for loop num length
        add num to sum
        create diff variable, sum-k
        if (diff) is in map
            increment count
            increment map[diff]
        else
            map[diff]:1

     return count

     ----
     Time complexity: O(n) where n nums.length
     Space complexity: O(n) where n nums.length

 */

const subarraySum = function(nums, k) {
    let map = new Map()
    map.set(0,1)
    let count = 0
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        let diff = sum-k
        if (map.has(diff)) {
            count += map.get(diff)
        }

        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1)
        } else {
            map.set(sum, 1)
        }
    }

    return count
};

let nums = [1]
let k = 0
console.log(subarraySum(nums, k))