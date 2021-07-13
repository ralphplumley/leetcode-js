/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
   const result = []

   nums.sort((a,b) => a - b)

   const permute = (curr, remaining) => {
       if (remaining.length === 0) {
            result.push(curr)
            return
       }

       for (let i = 0; i < remaining.length; ++i) {
           if (i > 0 && remaining[i] === remaining[i-1]) continue
           else {
               curr.push(remaining[i])
               const a = remaining.slice(0, i)
               const b = remaining.slice(i + 1)
               permute([...curr], [...remaining.slice(0, i), ...remaining.slice(i + 1)])
               curr.pop()
           }
       }
   }

   permute([], nums)
   return result
}

const nums = [1,4,2,3]
console.log(permuteUnique(nums))

/*
[1,1,2,3]
[1,1,3,2]
[1,2,1,3]
[1,2,3,1]
[1,3,1,2]
[1,3,2,1]
[2,1,1,3]
[2,1,3,1]
[2,3,1,1]
[3,1,1,2]
[3,1,2,1]
[3,2,1,1]
 */
