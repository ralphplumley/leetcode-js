/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    const arr = JSON.stringify(n).split('').map(Number)

    /*
        Check if entire array is decending
    */
    let largest = true
    for(let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] < arr[i+1]) {
            largest = false
            break
        }
    }

    if (largest) return -1

    /*
        Otherwise,
        1: Find the 1st decreasing element a[i] > a[i-1]
        2: Find the value just larger than that value
        3: Swap the values found at #1 and #2
        4: Reverse everything after #1~th slot
    */

    const len = arr.length
    let i = len - 2

    while (i >= 0 && arr[i+1] <= arr[i]) {
        i--
    }

    if (i < 0) return -1
    let j = len - 1

    while (j >= 0 && arr[j] <= arr[i]) {
        j--
    }

    swap(arr, i, j)
    reverse(arr, i + 1)

    const result = Number(arr.join(''))

    return result > 2147483647 ? -1 : result
};

const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const reverse = (arr, start) => {
    let i = start,
        j = arr.length - 1

    while (i < j) {
        swap(arr, i, j)
        i++
        j--
    }
}
