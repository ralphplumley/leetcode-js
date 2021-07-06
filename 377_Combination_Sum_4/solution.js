/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
    Time: O(T * N)
        - Because of memo, each call will only be evaluated once. Worst case, we have T different input values.
        - For each call of backtrack(), worst case it takes O(N) time for the non-recursive part

    Space: O(T)
        - Because of recursion, will incur additional memory in call stack. Worst case, piles up T times.
          So we need O(T) space.
        - We also supplied a memo technique where we store results, which would add an additional O(T)
        - Which is O(T) + O(T) => just O(T)
 */
var combinationSum4 = function(nums, target) {
    const memo = new Map()

    nums.sort((a,b) => a - b)

    const backtrack = (remain) => {
        if (remain === 0) return 1
        if (memo.has(remain)) return memo.get(remain)

        let count = 0
        for (let i = 0; i < nums.length; ++i) {
            let num = nums[i]

            const newRemain = remain - num
            if (newRemain < 0) break

            count += backtrack(newRemain)
        }

        memo.set(remain, count)
        return count
    }

    return backtrack(target)
};

const nums = [2,1]
const target = 4
console.log(combinationSum4(nums, target))
