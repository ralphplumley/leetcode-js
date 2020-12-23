var twoSum = function (nums, target) {

    if (nums.length < 2) return -1

    let ans = []
    let log = {}

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        let diff = target - curr
        if (diff in log) {
            ans = [log[diff], i]
            break
        } else {
            log[curr] = i
        }
    }

    return ans
}

module.exports = twoSum