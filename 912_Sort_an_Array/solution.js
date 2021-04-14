/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length < 2) return nums

    let pivot = nums.length / 2
    let left_list = sortArray(nums.slice(0, pivot))
    let right_list = sortArray(nums.slice(pivot, nums.length))

    return merge(left_list, right_list)
};

const merge = function(left_list, right_list) {
    let return_list = new Array(left_list.length + right_list.length)

    let return_cursor = 0,
        left_cursor = 0,
        right_cursor = 0

    while (left_cursor < left_list.length && right_cursor < right_list.length) {
        if (left_list[left_cursor] < right_list[right_cursor]) {
            return_list[return_cursor++] = left_list[left_cursor++]
        } else {
            return_list[return_cursor++] = right_list[right_cursor++]
        }
    }

    // check if any elements are left
    while (left_cursor < left_list.length) {
        return_list[return_cursor++] = left_list[left_cursor++]
    }

    while (right_cursor < right_list.length) {
        return_list[return_cursor++] = right_list[right_cursor++]
    }

    return return_list
}