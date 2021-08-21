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

const getMinCostBetter = (D, R) => {
    const stackD = [[D[0], 0]],
          stackR = [[R[0], 0]],
          map = new Map()

    let min = D[0] + R[0]
    map.set(min, [0,0])

    for (let i = 1; i < D.length; ++i) {
        stackD.push([D[i], i])
        stackR.push([R[i], i])

        // [value, index]
        while (stackD.length > 1 && stackD[stackD.length - 1][0] < stackD[stackD.length - 2][0])
            stackD.shift()
        while (stackR.length > 1 && stackR[stackR.length - 1][0] < stackR[stackR.length - 2][0])
            stackR.shift()
        while (stackR.length > 1 && stackD[0][1] > stackR[0][1])
            stackR.shift()

        const sum = stackD[0][0] + stackR[0][0]
        if (sum < min) {
            min = sum
            map.set(min, [stackD[0][1], stackR[0][1]])
        } else {
            if (!map.has(sum)) map.set(sum, [stackD[0][1], stackR[0][1]])
        }
    }

    return map.get(min)
}

D = [8, 10, 5, 6, 1]
R = [3, 9, 8, 1, 18]
console.log(getMinCostBetter(D, R))























