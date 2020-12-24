var maxSubArray = function (nums) {
    let max = Number.NEGATIVE_INFINITY
    let n = nums.length

    // [i,j] sliding window
    let i = 0, j = 0

    while (i < n) {
        let tmp_sum = 0
        while (j < n) {
            tmp_sum += nums[j]
            if (tmp_sum > max) max = tmp_sum
            if (nums[j] > tmp_sum) break
            else j++
        }
        i = j
    }
    return max
}

module.exports = maxSubArray