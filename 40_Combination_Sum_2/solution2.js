/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // no candidates means no results
    if (!candidates) return []

    // empty set if target is 0
    if (target === 0) return [[]]

    candidates.sort((a,b) => {return a - b})

    const paths = []

    const find = (target, path, index) => {
        console.log('considering: ', target, path, index)

        if (target === 0) {
            // we found a valid path, so store that in the paths
            paths.push(path)
            return
        } else {
            // don't run over the candidates array length
            // and don't try candidates that would bring target below 0
            while (index < candidates.length && target - candidates[index] >= 0) {
                find(target - candidates[index], [...path, candidates[index]], index + 1)
                index++
                while (candidates[index - 1] === candidates[index]) index++
            }
        }
    }

    find(target, [], 0)
    return paths
};

const candidates = [10,1,2,7,6,1,5]
const target = 8
console.log(combinationSum2(candidates, target))
