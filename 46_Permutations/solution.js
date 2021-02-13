/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [],
        permutations = []

    permutations.push([])

    for ( let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]

        // take all existing permutations, and add the currentNumber to make new permutations
        const n = permutations.length
        for (let p = 0; p < n; p++) {
            const oldPermutation = permutations.shift()
            // create a new permutation by adding the current number at every position
            for (let j = 0; j < oldPermutation.length + 1; j++) {
                const newPermutation = oldPermutation.slice(0) // clone the permutation
                newPermutation.splice(j, 0, currentNumber)
                if (newPermutation.length === nums.length) {
                    result.push(newPermutation)
                } else {
                    permutations.push(newPermutation)
                }
            }
        }
    }

    return result
};