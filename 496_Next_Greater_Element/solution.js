/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(nums1, nums2) {
    const stack = [],
        map = new Map()

    for (let i = 0; i < nums2.length; ++i) {
        const num = nums2[i]
        while (stack.length && num > stack[stack.length - 1]) {
            map.set(stack.pop(), num)
        }
        stack.push(num)
    }

    while (stack.length) {
        map.set(stack.pop(), -1)
    }

    const results = []
    for (let i = 0; i < nums1.length; ++i) {
        results[i] = map.get(nums1[i])
    }

    return results
};
