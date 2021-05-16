/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
    let result = []
    let map = buildFreqTable(nums)
    printPermutations(map, [], nums.length, result)
    return result
};

const buildFreqTable = function(nums) {
    let map = new Map()
    nums.forEach(num => {
        if (!map.has(num)) {
            map.set(num, 1)
        } else {
            map.set(num, map.get(num) + 1)
        }
    })
    return map
}

const printPermutations = function(map, currentRun, remaining, result) {
    // base case, permutation has been completed
    if (remaining === 0) {
        result.push(Array.from(currentRun))
        return
    }

    // try remaining numbers for next number, and generate remaining permutations
    for (let [num, count] of map) {
        if (count > 0) {
            map.set(num, count - 1)
            currentRun.push(num)
            printPermutations(map, currentRun, remaining - 1, result)
            currentRun.pop()
            map.set(num, count)
        }
    }
}
