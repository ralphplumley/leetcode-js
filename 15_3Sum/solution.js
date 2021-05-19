/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    nums.sort((a,b) => a - b)

    let output = [],
        target = 0

    if (nums.length < 3) return output

    for (let i = 0; i < nums.length - 2; i++) {

        if (nums[i] > target) break

        // no repeats
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i + 1,
            right = nums.length - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === target) {
                let solution = [nums[i], nums[left], nums[right]]
                output.push(solution)

                // skip duplicates
                while (nums[left] === nums[left+1]) left++
                while (nums[right] === nums[right-1]) right--

                left++
                right--

            } else if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }

    return output
};

let arr = [0,0,0,0]
console.log(threeSum(arr))
