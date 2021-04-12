/**
 * @param {number[]} nums
 * @return {number}
 */

// uses Gauss' Formula

const missingNumber = function(nums) {
    let expectedSum = nums.length * (nums.length + 1) / 2
    let actualSum = 0
    for (let num of nums) actualSum += num
    return expectedSum - actualSum
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))