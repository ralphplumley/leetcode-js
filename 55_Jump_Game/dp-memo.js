/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
    Naive / inefficient is:
    Time: O(2^N), N = length of array nums
    Space: O(N), recursion requires additional memory for stack frames

    Top-down DP / Memo:
    Time: O(N^2), N = num elements, and for every element in the array, we are looking at the next
            nums[i] elements to its right.
    Space: O(N + N) => O(N), one N for recursion stack, one more N for memo
*/

var canJump = function(nums) {
    const memo = new Map()

    const recurse = (index) => {
        if (memo.has(index)) return memo.get(index)
        if (index >= nums.length -1) return true
        if (nums[index] === 0) return false

        for (let i = 0; i < nums[index]; i++) {
            if (recurse(index + i + 1)) {
                memo.set(index, true)
                return true
            }
        }

        memo.set(index, false)
        return false
    }

    return recurse(0)

};
