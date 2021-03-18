/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let low = 0
    let hi = nums.length - 1
    while (low < hi) {
        let mid = low + (hi - low) / 2
        let halvesAreEven = (hi - mid) % 2 === 0

        if (nums[mid + 1] === nums[mid]) {
            if (halvesAreEven) {
                low = mid + 2
            } else {
                hi = mid - 1
            }
        } else if (nums[mid - 1] === nums[mid]) {
            if (halvesAreEven) {
                hi = mid - 2
            } else {
                low = mid + 1
            }
        } else {
            return nums[mid]
        }
    }

    return nums[low]
};