/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)

    let res = []

    for (let i = 0; i < nums.length && nums[i] <= 0; ++i) {
        if (i === 0 || nums[i - 1] !== nums[i]) twoSum(nums, i, res)
    }

    return res
};

const twoSum = function(nums, i, res) {
    let seen = new Set()
    for (let j = i + 1; j < nums.length; ++j) {
        let complement = -nums[i] - nums[j]
        if (seen.has(complement)) {
            res.push([nums[i], nums[j], complement])

            // if same number, skip
            while (j + 1 < nums.length && nums[j] === nums[j + 1]) ++j
        }
        seen.add(nums[j])
    }
}

const input = [-1,0,1,2,-1,-4]
console.log(threeSum(input))