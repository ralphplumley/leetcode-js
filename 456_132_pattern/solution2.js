/*
    A little better than naive.
    Store minimum value seen before J and K (removes one loop)
    Time: O(N^2)
    Space: O(1)
 */

const find132pattern = (nums) => {
    let min = nums[0]

    for (let j = 1; j < nums.length -1; ++j) {
        min = Math.min(min, nums[j])
        if (min === nums[j]) continue
        for (let k = j + 1; k < nums.length; ++k) {
            if (nums[k] < nums[j] && min < nums[k]) return true
        }
    }

    return false
};

console.log(find132pattern([3,1,4,2])) // true
console.log(find132pattern([1,2,3,4])) // false
console.log(find132pattern([-1,3,2,0])) // true
