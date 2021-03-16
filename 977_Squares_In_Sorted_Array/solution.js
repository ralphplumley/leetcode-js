/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    let result = [],
        head = 0,
        tail = nums.length - 1

    while (head <= tail) {
        let headSquared = nums[head] ** 2
        let tailSquared = nums[tail] ** 2
        if (headSquared > tailSquared) {
            result.push(headSquared)
            head++
        } else {
            result.push(tailSquared)
            tail--
        }
    }

    return result.reverse()
};

let nums = [-4,-1,0,3,10]
console.log(sortedSquares(nums))