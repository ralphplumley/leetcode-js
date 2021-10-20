/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]

    const dp = (start, end) => {
        let take = 0, dontTake = 0

        for (let i = start; i <= end; ++i) {
            const temp = take,
                current = nums[i]

            take = Math.max(current + dontTake, take)
            dontTake = temp
        }

        return take
    }

    const startAt0 = dp(0, nums.length - 2), // include first through second to last
        startAt1 = dp(1, nums.length - 1)  // include second through last

    return Math.max(startAt0, startAt1)
};

/*
    TC: O(2n) => O(n), where n is the size of nums
    SC: O(1), not using additional space
 */
