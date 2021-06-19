/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    /*
        Approach: Dynamic Programming
        Time: O(n^2) - two loops of n
        Space: O(n) - dp array of size n is used
    */

    if (nums.length === 0) return 0

    let dp = new Array(nums.length)
    dp[0] = 1

    let maxAns = 1

    for (let i = 0; i < dp.length; i++) {
        let maxVal = 0
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) maxVal = Math.max(maxVal, dp[j])
        }
        dp[i] = maxVal + 1
        maxAns = Math.max(maxAns, dp[i])
    }

    return maxAns
};

console.log(lengthOfLIS([5,2,21,1,38]))
