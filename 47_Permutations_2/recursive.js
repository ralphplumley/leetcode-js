/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length === 1) return [nums]

    const result = []
    let prev = null
    nums.sort((a,b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        const p = nums[i]
        if (p == prev) continue
        prev = p

        const restNums = [...nums]
        restNums.splice(i, 1)

        const perms = permuteUnique(restNums).map(x => [p, ...x])

        result.push(...perms)
    }

    return result
};

console.log(permuteUnique([1,2,1]))
