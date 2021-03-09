let productExceptSelf = function(nums) {
    let forward = []
    let backward = []
    let ans = []

    let currentRun = 1
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            forward[i] = 1
        } else {
            forward[i] = currentRun
        }
        currentRun = currentRun * nums[i]
    }

    currentRun = 1
    let len = nums.length
    for (let j = len - 1; j >= 0; j--) {
        if (j === len - 1) {
            backward[j] = 1
        } else {
            backward[j] = currentRun
        }
        currentRun = currentRun * nums[j]
    }

    for (let k = 0; k < nums.length; k++) {
        ans[k] = forward[k] * backward[k]
    }

    return ans
}

// Input:  [1,2,3,4]
// Output: [24,12,8,6]

console.log(productExceptSelf([2,3,4,5]))