/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const queue = [],
        result = []

    for (let i = 0; i < nums.length; ++i) {

        while (queue && nums[queue[queue.length -1 ]] <= nums[i]) queue.pop()

        queue.push(i)

        // remove first element if it's outside the window
        if (queue[0] === i - k) queue.shift()

        // if window has k elements, add to results
        if (i >= k - 1) result.push(nums[queue[0]])

    }

    return result
};

/*
Time: O(N)
Space: O(N), since O(N - k + 1) is used for an output array and O(k) for a deque
 */
