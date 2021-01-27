/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let A = firstList
    let B = secondList

    let ans = []
    let i = 0, j = 0

    while (i < A.length && j < B.length) {
        // let's check if A[i] intersects B[j]
        // lo - the startpoint of the intersection
        // hi - the endpoint of the intersection
        let lo = Math.max(A[i][0], B[j][0])
        let hi = Math.min(A[i][1], B[j][1])

        if (lo <= hi) {
            ans.push([lo, hi])
        }

        // remove the interval with the smallest endpoint
        if (A[i][1] < B[j][1]) {
            i += 1
        } else {
            j += 1
        }
    }

    return ans
};