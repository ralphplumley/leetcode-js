/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // initialize max to zero
    let max = 0

    // initialize left and right to extreme ends of the array
    let left =0,
        right = height.length - 1

    // while left < right, loop
    while (left < right) {
        // calculate current area and update max area
        let currentArea = Math.min(height[left], height[right]) * (right -left)
        max = Math.max(max, currentArea)

        // take decision regarding which pointer to move
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    // return max area
    return max

};
