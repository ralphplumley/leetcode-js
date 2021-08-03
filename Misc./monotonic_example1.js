// for each number in array, give subsequent greater element or -1
// eg [2,1,2,4,3] -> [4,2,4,-1,-1]

const nextGreaterElement = (nums) => {
    const result = [],
          stack = []

    // iterate in reverse
    for (let i = nums.length - 1; i >= 0; --i) {
        while (stack.length && stack[stack.length - 1] <= nums[i]) {
            stack.pop() // only keep value that are local maximums
        }

        // the next value that is larger than this
        result[i] = stack.length ? stack[stack.length - 1] : -1
        stack.push(nums[i]) // add current val to stack
    }

    return result
}

const nums = [2,1,2,4,3]
console.log(nextGreaterElement(nums))
