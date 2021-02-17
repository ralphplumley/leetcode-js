/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1, -1]
    result[0] = binarySearch(nums, target, false)

    if (result[0] !== -1) {
        result[1] = binarySearch(nums, target, true)
    }

    return result
};

function binarySearch(nums, target, findMidIndex) {
    let keyIndex = -1
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        let num = nums[mid]

        if (target < num) {
            end = mid - 1
        } else if (target > num) {
            start = mid + 1
        } else { // found the target
            keyIndex = mid
            if (findMidIndex) { // search ahead to find the last index of target
                start = mid + 1
            } else { // search behind to find the first index of target
                end = mid - 1
            }

        }
    }

    return keyIndex
}