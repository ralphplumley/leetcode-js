/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    /*
        Approach: Recursion with Memo
        Time: O(n^2) - size of recursion tree can go up to n^2
        Space: O(n^2) - memo array of n * n is used
    */

    const recurse = function (nums, prevIdx, curpos, memo) {
        if (curpos === nums.length) return 0

        if (memo[prevIdx + 1][curpos] >= 0) {
            return memo[prevIdx + 1][curpos]
        }

        let taken = 0
        if (prevIdx < 0 || nums[curpos] > nums[prevIdx]) {
            taken = 1 + recurse(nums, curpos, curpos + 1, memo)
        }

        const nottaken = recurse(nums, prevIdx, curpos + 1, memo)
        memo[prevIdx + 1][curpos] = Math.max(taken, nottaken)

        return memo[prevIdx + 1][curpos]
    }

    let memo = []
    for (let i = 0; i < nums.length + 1; i++) {
        const arr = new Array(nums.length).fill(-1)
        memo.push(arr)
    }

    return recurse(nums, -1, 0, memo)
};

console.log(lengthOfLIS([5,2,21,1,38]))