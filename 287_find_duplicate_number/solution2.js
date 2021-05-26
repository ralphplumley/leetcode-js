/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // Floyd's Cycle Finding Algo
    let slow = nums[0],
        fast = nums[nums[0]]

    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }

    slow = 0

    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
};
