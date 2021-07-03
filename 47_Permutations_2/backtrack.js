/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const results = [],
        comb = []

    // count the occurence of each number
    const counter = new Map()
    nums.forEach(num => {
        if (counter.has(num)) counter.set(num, counter.get(num) + 1)
        else counter.set(num, 1)
    })

    backtrack(comb, nums.length, counter, results)
    return results
};

const backtrack = (comb, n, counter, results) => {
    if (comb.length === n) {
        results.push([...comb])
        return
    }

    for (let [num, count] of counter) {
        if (count === 0) continue

        // add this number into the current combination
        comb.push(num)
        counter.set(num, count - 1)

        // continue the exploration
        backtrack(comb, n, counter, results)

        // revert the choice for the next exploration
        comb.pop()
        counter.set(num, count)
    }
}

console.log(permuteUnique([1,2,1]))
