/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function(nums) {
    let length = nums.length
    let answer = []

    // answer[i] contains the product of all the elements to the left
    // Note: for the element at index '0', there are no elements to the left,
    // so the answer[0] would be 1
    answer[0] = 1
    for (let i = 1; i < length; i++) {
        // answer[i - 1] already contains the product of elements to the left of 'i - 1'
        // Simply multiplying it with nums[i - 1] would give the product of all
        // elements to the left of index 'i'
        answer[i] = nums[i-1] * answer[i-1]
    }

    // R contains the product of all the elements to the right
    // Note: for the element at index 'length - 1', there are no elements to the right,
    // so the R would be 1
    let R = 1
    for (let i = length-1; i >= 0; i--) {
        // For the index 'i', R would contain the
        // product of all elements to the right. We update R accordingly
        answer[i] = answer[i] * R
        R *= nums[i]
    }

    return answer
};

let arr = [4,5,1,8,2]
console.log(productExceptSelf(arr))