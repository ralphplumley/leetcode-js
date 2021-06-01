const findTargetSumWays = (nums, target) => {
    let memo = new Map()
    return dfs(nums, memo, target, 0)
}

const dfs = (nums, memo, target, cur) => {
    if (memo.has(target + ' ' + cur)) return memo.get(target + ' ' + cur)
    if (cur === nums.length) return target === 0 ? 1 : 0

    let result = dfs(nums, memo, target - nums[cur], cur + 1) +
        dfs(nums, memo, target + nums[cur], cur + 1)

    memo.set(target + ' ' + cur, result)
    return result
}

let nums = [1,1,1,1,1],
    target = 3

console.log(findTargetSumWays(nums, target))
