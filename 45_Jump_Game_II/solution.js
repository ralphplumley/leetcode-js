/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const memo = []

    const recurse = (index) => {
        if (index === nums.length - 1) return 0
        if (nums[index] === 0) return Infinity

        if (typeof memo[index] === 'undefined') {
            let totalJumps = Infinity
            let start = index + 1
            const end = index + nums[index]

            while (start < nums.length && start <=end) {
                const minJumps = recurse(start++)
                if (minJumps !== Infinity) totalJumps = Math.min(totalJumps, minJumps + 1)
            }

            memo[index] = totalJumps
        }

        return memo[index]
    }

    return recurse(0)
};
