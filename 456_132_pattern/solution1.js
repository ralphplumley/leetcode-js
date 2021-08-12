/*
    Naive solution
    Time: O(N^3)
    Space: O(1)
 */

var find132pattern = function(nums) {

    for (let i = 0; i < nums.length - 2; ++i) {
        for (let j = i + 2; j < nums.length; ++j) {
            for (let k = i + 1; k < j; ++k) {
                if (i < k < j) {
                    if (nums[i] < nums[j]) {
                        if (nums[k] > nums[i] && nums[k] > nums[j]) return true
                    }
                }
            }
        }
    }

    return false
};
