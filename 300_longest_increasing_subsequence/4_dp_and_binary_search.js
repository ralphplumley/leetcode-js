/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    /*
        Approach: Dynamic Programming with Binary Search
        Time: O(n log n) - binary search takes log n, and it is called n times
        Space: O(n) - dp array of size n is used
    */

    if (nums === null || nums.length === 0) return 0
    if (nums.length === 1) return 1

    let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER)

    for (let i = 0; i < nums.length; i++) {
        let pos = lowerBound(dp, nums[i], i)
        dp[pos] = nums[i]
    }

    for (let i = dp.length - 1; i >= 0; i--) {
        if (dp[i] !== Number.MAX_SAFE_INTEGER) return i + 1
    }

    return 0

};

const lowerBound = function(dp, target, high) { // binary search
    let low = 0

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2)

        if (target === dp[mid]) {
            return mid
        } else if (target < dp[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return low
}

console.log(lengthOfLIS([5,2,21,1,38]))