/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    /*
    let left = 0,
        right = nums.length - 1

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        let A = nums[mid-1] || -Infinity,
            B = nums[mid],
            C = nums[mid+1] || Infinity

        if (A < B && B > C) { // found peak
            return mid
        } else if (A > B) { // move left
            right = mid - 1
        } else if (B > A) { // move right
            left = mid + 1
        }
    }

    return right
    */

    let left = 0,
        right = nums.length - 1

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] > nums[mid+1]) right = mid
        else left = mid + 1
    }

    return left
};
