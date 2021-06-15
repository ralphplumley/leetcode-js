/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    /*
        brute force
        time: O(2^n)
        space: O(n^2)
    */

    const recurse = function (nums, prev, curpos) {
        if (curpos === nums.length) return 0

        let taken = 0

        if (nums[curpos] > prev) {
            taken = 1 + recurse(nums, nums[curpos], curpos + 1)
        }

        const nottaken = recurse(nums, prev, curpos + 1)
        return Math.max(taken, nottaken)
    }

    return recurse(nums, -Infinity, 0)
};

// !!!!! TIME LIMIT EXCEEDED !!!!!
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
