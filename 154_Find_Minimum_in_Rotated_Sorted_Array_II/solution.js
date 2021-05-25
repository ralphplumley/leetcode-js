/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lo = 0;
    let hi = nums.length - 1;
    let mid = 0;

    while(lo < hi) {
        mid = lo + Math.floor((hi - lo) / 2);

        if (nums[mid] > nums[hi]) {
            lo = mid + 1;
        }
        else if (nums[mid] < nums[hi]) {
            hi = mid;
        }
        else {
            hi--;
        }
    }
    return nums[lo];
};
