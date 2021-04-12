/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let longestSequence = 0
    let left = 0
    let right = 0
    let numZeroes = 0

    // while our window is in bounds
    while (right < nums.length) {

        // add the right most element into our window
        if (nums[right] === 0) {
            numZeroes++
        }

        // if our window is invald, contract our window
        while(numZeroes === 2) {
            if (nums[left] === 0) {
                numZeroes--
            }
            left++
        }

        // update our longest sequence answer
        longestSequence = Math.max(longestSequence, right - left + 1)

        // expand our window
        right++
    }

    return longestSequence

};

let nums = [1,0,1,1,0]
console.log(findMaxConsecutiveOnes(nums))