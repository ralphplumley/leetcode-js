/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function(arr, k) {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        let pivot = left + Math.floor((right - left) / 2)
        // If number of positive integers
        // which are missing before arr[pivot]
        // is less than k -->
        // continue to search on the right.
        if (arr[pivot] - pivot - 1 < k) {
            left = pivot + 1
        } else {
            right = pivot - 1
        }
    }

    // At the end of the loop, left = right + 1,
    // and the kth missing is in-between arr[right] and arr[left].
    // The number of integers missing before arr[right] is
    // arr[right] - right - 1 -->
    // the number to return is
    // arr[right] + k - (arr[right] - right - 1) = k + left
    return left + k
};

arr = [1,2,3,4], k = 2
console.log(findKthPositive(arr, k))