/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
    Time:   O(M*N), M = half of sum, N = number of elements
    Space:  O(M*N)
*/

var canPartition = function(nums) {
    let sum = nums.reduce((acc, curr) => {
        return acc + curr
    })

    if (sum % 2 !== 0) return false

    sum /= 2

    let memo = new Map()
    return dfs(nums, sum, 0, memo)
};

const dfs = (nums, sum, index, memo) => {
    if (sum === 0) return true
    if (sum < 0 || index === nums.length) return false

    if (memo.has(`${index}-${sum}`)) return memo.get(`S{index}-${sum}`)

    // either include current element or skip
    let res = dfs(nums, sum - nums[index], index + 1, memo) ||
        dfs(nums, sum, index + 1, memo)

    memo.set(`${index}-${sum}`, res)
    return res
}

console.log(canPartition([1,2,3,5]))
