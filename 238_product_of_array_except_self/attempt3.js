/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {

    let ans = [1]
    for (let i = 1; i < nums.length; i++) {
       ans[i] = ans[i-1] * nums[i-1]
    }

    let rightValue = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] = ans[i] * rightValue
        rightValue = rightValue * nums[i]
    }

    return ans
};

let arr = [1,2,3,4]
console.log(productExceptSelf(arr))