/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {

    /*

    // Brute Force -----------------------------------------------------------
    // TC: O(N^2)
        // N = nums.length, and we mayhave to do that up to N times

    // SC: O(1)

    let startValue = 1,
        sum = 0,
        complete = false

    while (!complete) {
        for (let i = 0; i < nums.length; ++i) {
            const num = nums[i]
            sum += num
            if (sum < 1) {
                startValue++
                sum = startValue
                break
            }

            if (i === nums.length - 1) complete = true
        }

    }

    return startValue
    */


    /*
    // Binary Search -----------------------------------------------------------
    // TC: O(n * log(mn))
    // SC: O(1)

    let n = nums.length,
        m = 100,
        left = 1,
        right = m * n + 1

    while (left < right) {
        const middle = Math.floor((left + right) / 2)

        let isValid = true,
            total = middle

        for (const num of nums) {
            total += num

            if (total < 1) {
                isValid = false
                break
            }
        }

        if (isValid) {
            right = middle
        } else {
            left = middle + 1
        }

    }

    return left
    */

    // Prefix Sum-----------------------------------------------------------
    // TC: O(n * log(mn))
    // SC: O(1)

    let minVal = 0,
        total = 0

    for (let i = 0; i < nums.length; ++i) {
        total += nums[i]
        minVal = Math.min(minVal, total)
    }

    return -minVal + 1
};
