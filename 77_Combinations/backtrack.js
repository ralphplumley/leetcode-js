/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const output = []

    const backtrack = (first, curr) => {
        // check if combination is done
        if (curr.length === k) output.push(Array.from(curr))

        for (let i = first; i < n + 1; ++i) {
            // add i into the current combination
            curr.push(i)

            // use next integers to complete the combination
            backtrack(i + 1, curr)

            // backtrack
            curr.pop()
        }
    }

    backtrack(1, [])
    return output
};

console.log(combine(4,2))
