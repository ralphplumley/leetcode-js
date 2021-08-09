/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = []
    const result = new Array(nums.length).fill(-1)

    for (let i = nums.length - 1; i >= 0; --i) {
        const num = nums[i]

        while (stack.length && num >= stack[stack.length - 1]) stack.pop()

        if (stack.length && stack[stack.length - 1] > num) {
            result[i] = stack[stack.length - 1]
        }

        stack.push(num)
    }

    for (let i = nums.length - 1; i >= 0; --i) {
        const num = nums[i]

        while (stack.length && num >= stack[stack.length - 1]) stack.pop()

        if (stack.length && stack[stack.length - 1] > num) {
            result[i] = stack[stack.length - 1]
        }

        stack.push(num)
    }

    return result
};
