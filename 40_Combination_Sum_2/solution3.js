/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [],
        temp = []

    candidates.sort((a,b) => a - b)

    const backtrack = (remain, index) => {
        if (remain < 0) return
        if (remain === 0) {
            result.push([...temp])
            return
        }

        for (let i = index; i < candidates.length; ++i) {

            if (i !== index && candidates[i] === candidates[i - 1]) continue

            temp.push(candidates[i])
            backtrack(remain - candidates[i], i + 1)
            temp.pop()
        }
    }

    backtrack(target, 0)
    return result
};
