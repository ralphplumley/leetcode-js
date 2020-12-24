let thirdMax = function (nums) {
    if (nums.length < 3) return Math.max(...nums)

    let set = new Set(nums)
    if (set.size < 3) return Math.max(...set)

    for (let i = 0; i < 2; i++) {
        set.delete(Math.max(...set))
    }

    return Math.max(...set)
}

module.exports = thirdMax