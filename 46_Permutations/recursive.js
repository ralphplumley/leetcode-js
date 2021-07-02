/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) return [nums]

    const permutations = []

    // get all permutations for nums excluding the first element
    const smallerPermutations = permute(nums.slice(1))

    // insert first option into every possible position of every smaller permutation
    const firstOption = nums[0]

    for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
        const smallerPermutation = smallerPermutations[permIndex]

        // insert first option into every possible position of smallerPermutation
        for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
            const permutationPrefix = smallerPermutation.slice(0, positionIndex)
            const permutationSuffix = smallerPermutation.slice(positionIndex)
            const joined = permutationPrefix.concat([firstOption], permutationSuffix)
            permutations.push(joined)
        }
    }

    return permutations

};

console.log(permute([1,2,3]))
