/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // backtrack method
    const output = [],
        nums_list = []

    nums.forEach(num => {
        nums_list.push(num)
    })

    const n = nums.length
    backtrack(n, nums_list, output, 0)

    return output

};

const backtrack = (n, nums, output, first) => {
    if (first === n) output.push([...nums])

    for (let i = first; i < n; ++i) {
        // place the i-th int first in the current permutation
        nums = swap(nums, first, i)

        // use next int to complete the permutation
        backtrack(n, nums, output, first + 1)

        // backtrack
        nums = swap(nums, first, i)
    }
}

const swap = (arr, a, b) => {
   const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
    return arr
}

const nums = [1,2,3]
console.log(permute(nums))
