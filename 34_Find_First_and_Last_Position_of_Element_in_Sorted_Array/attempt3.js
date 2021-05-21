/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let output = [-1, -1]
    if (nums === null || nums.length === 0)  return output
    const firstOccurrence = findBound(nums, target, true)

    if (firstOccurrence === -1) return output
    const lastOccurrence = findBound(nums, target, false)

    return [firstOccurrence, lastOccurrence]
};

const findBound = function (nums, target, isFirst) {
    let n = nums.length,
        left = 0,
        right = n - 1

    while (left <= right) {
        let mid = Math.floor(left + (right-left) / 2)

        if (nums[mid] === target) {
            if (isFirst) {
                // means, find our lower bound
                if (mid === left || nums[mid - 1] !== target) {
                    return mid
                }

                // search on the left side of the bound
                right = mid - 1
            } else {
                // means, we found our upper bound
                if (mid === right || nums[mid + 1] !== target) {
                    return mid
                }

                // search on the right side for the bound
                left = mid + 1
            }
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
}
