/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let left = 0,
        right = nums.length - 1

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)

        if (nums[mid] === target) {
            return mid
        } else if (nums[left] <= nums[mid]) {
            // left side is sorted in order
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1
            } else {
                // target is greater than arr[mid]
                left = mid + 1
            }
        } else {
            // right side is sorted in ascending order
            if(target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return -1
};

let arr = [4,5,6,7,8,1,2,3]
let target = 8
console.log(search(arr, target))