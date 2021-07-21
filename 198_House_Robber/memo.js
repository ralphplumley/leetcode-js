/**
 * @param {number[]} nums
 * @return {number}
 */
/*
    Time: O(N), we must call N recursive calls. But we cached each repetitive call.
    Space: O(N), for the cache and recursion stack.
 */
var rob = function(nums) {
    const dp = []

    const recurse = (index) => {
        if (index > nums.length - 1) return 0

        if (typeof dp[index] === 'undefined') {
            const robCurrent = nums[index] + recurse(index + 2)
            const skipCurrent = recurse(index + 1)

            dp[index] = Math.max(robCurrent, skipCurrent)
        }

        return dp[index]
    }

    return recurse(0)
};
