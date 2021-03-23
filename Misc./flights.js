/*
    given two arrays of flight costs, return the indicies of the cheapest round trip flight
                        v
    Departures: [10, 9, 8, 9, 6]
    Return:     [9,  9, 8, 7, 9]
                           ^
    --> (2,3)

    // Brute Force
    // for each number in D
        // for each number in R, but start at i
            // if sum is less than min so far
                // update

 */

const getMinCost = function(D, R) {
    let ans = []
    let min = Infinity

    for (let i = 0; i < D.length; i++) {
        for (let j = i; j < R.length; j++) {
            let sum = D[i] + R[j]
            if (sum < min) {
                min = sum
                ans = [i, j]
            }
        }
    }

    return ans
}

d1 = [10,7,8,6,5]
r1 = [7,8,9,4,9]
console.log(getMinCost(d1, r1))