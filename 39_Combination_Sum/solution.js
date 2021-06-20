/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let results = []
    let comb = []

    backtrack(target, comb, 0, candidates, results)
    return results
};

const backtrack = function(remain, comb, start, candidates, results) {
    if (remain === 0) {
        // make a deep cop of the current combination
        results.push(Array.from(comb))
        return
    } else if (remain < 0) {
        // exceed the scope, stop exploration
        return
    }

    for (let  i = start; i < candidates.length; ++i) {
        // add the number into the combination
        comb.push(candidates[i])
        backtrack(remain - candidates[i], comb, i, candidates, results)
        // backtrack, remove the number from the combination
        comb.pop()
    }
}

const candidates = [2,3,6,7], target = 7
console.log(combinationSum(candidates, target))
