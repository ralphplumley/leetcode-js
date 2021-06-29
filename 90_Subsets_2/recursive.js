/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
    Time: (n log n) * 2^n => O(2^n)
    Space: O(N)
*/

var subsetsWithDup = function(nums) {
    nums.sort()

    const subsets = []

    let recurse = function(currSet, remainingSet) {
        subsets.push(currSet)

        for (let i = 0; i < remainingSet.length; ++i) {

            // check for duplicates
            if (i > 0 && remainingSet[i] === remainingSet[i-1]) continue

            const newCurrSet = currSet.concat([remainingSet[i]])
            const newRemainingSet = remainingSet.slice(i + 1)

            recurse(newCurrSet, newRemainingSet)
        }
    }

    // kick it off
    recurse([], nums)
    return subsets
};
