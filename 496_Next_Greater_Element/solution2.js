/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [],
        map = new Map()

    // pre process nums2 into map, so we have quick access later
    for (let i = 0; i < nums2.length; ++i) {
        const num = nums2[i]
        while (stack.length && num > stack[stack.length - 1]) {
            map.set(stack.pop(), num)
        }

        stack.push(num)
    }

    // add any left over elements in our stack, into our map
    while (stack.length) map.set(stack.pop(), -1)

    const result = new Array(nums1.length)
    for (let i = 0; i < nums1.length; ++i) {
        const num = nums1[i]
        result[i] = map.get(num)
    }

    return result
};
