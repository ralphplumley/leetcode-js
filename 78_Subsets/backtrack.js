/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const result = [],
        temp = []

    const backtrack = (i) => {
        result.push([...temp])

        for(let j = i; j < nums.length; j++) {
            temp.push(nums[j])
            backtrack(j + 1)
            temp.pop()
        }
    }

    backtrack(0) // start from index 0
    return result
};

const nums = [1,2,3]
console.log(subsets(nums))
