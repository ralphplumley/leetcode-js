/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
    // nums will always have at least 1
    // if (nums.length === 1) return nums

    // first, find the first decreasing element
    let i = nums.length - 2
    while (i >= 0 && nums[i+1] <= nums[i]) {
        i--
    }

    // find the smallest number after index i, that's bigger than the value at index i
    if (i >= 0) {
        let j = nums.length - 1
        while (j >= 0 && nums[j] <= nums[i]) {
            j--
        }
        swap(nums, i, j)
    }
    reverse(nums, i + 1)
    console.log(nums)
};

const reverse = function(nums, start) {
    let i = start,
        j = nums.length - 1

    while (i < j) {
        swap(nums, i , j)
        i++
        j--
    }
}

const swap = function(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

let nums = [1,3,2,4]
console.log(nextPermutation(nums))