/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const num_set = new Set()

    for (let num of nums) {
        num_set.add(num)
    }

    let longestStreak = 0

    for (let num of num_set) {
        if (!num_set.has(num - 1)) {
            let currentNum = num
            let currentStreak = 1

            while (num_set.has(currentNum + 1)) {
                currentNum += 1
                currentStreak += 1
            }

            longestStreak = Math.max(longestStreak, currentStreak)
        }
    }

    return longestStreak
};

const nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums))


