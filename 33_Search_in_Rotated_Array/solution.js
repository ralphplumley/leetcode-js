/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        let mid = Math.floor(start + (end - start)/2)

        if (nums[mid] === target) return mid
        if (nums[start] <= nums[mid]) {
            // that means left side is sorted in order (left side is start to mid)
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1
            } else {
                // target is > arr[mid]
                start = mid + 1
            }
        } else {
            // right side is sorted in ascending order
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1
};