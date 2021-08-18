/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

    /*
        Time: O(n) - n numbers are pushed and popped
        Space: O(n) - a stack is used
     */

    const stack = []
    stack.push(-1)

    let length = heights.length,
        maxArea = 0

    for (let i = 0; i < length; ++i) {
        while ((stack[stack.length - 1] !== -1) && (heights[stack[stack.length - 1]] >= heights[i])) {
            const currentHeight = heights[stack.pop()],
                currentWidth = i - stack[stack.length - 1] - 1
            maxArea = Math.max(maxArea, currentHeight * currentWidth)
        }

        stack.push(i)
    }

    while (stack[stack.length - 1] !== -1) {
        const currentHeight = heights[stack.pop()],
            currentWidth = length - stack[stack.length - 1] - 1
        maxArea = Math.max(maxArea, currentHeight * currentWidth)
    }

    return maxArea
};
