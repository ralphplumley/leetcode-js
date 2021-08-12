/*
    MonoStack
    Time: O(N), Push and pop elements at most N times
    Space: O(N), Stack can grow upto a max depth of N
                 Further, min array of size N is used
 */

const find132pattern = (nums) => {
    const min = new Array(nums.length)

    // set first number as min
    min[0] = nums[0]

    for (let j = 1; j < nums.length; ++j) {
        min[j] = Math.min(nums[j], min[j-1])
    }

    const stack = []
    for (let j = nums.length - 1; j >= 0; --j) {
        while (stack.length && stack[stack.length - 1] < nums[j]) {
            if (stack[stack.length - 1] > min[j]) return true
            stack.pop()
        }
        stack.push(nums[j])
    }
    return false
};

console.log(find132pattern([6, 12, 3, 6, 11, 20])) // true
// console.log(find132pattern([3,1,4,2])) // true
// console.log(find132pattern([1,2,3,4])) // false
// console.log(find132pattern([-1,3,2,0])) // true
