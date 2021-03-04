/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    /*
        loop through nums
            if the index of the value is already negative
                push index into output
            else
                make the value at the index negative

     index: [0,1,2,3,4,5,6,7]
  original: [ 4, 3, 2, 7,8,2, 3, 1]
            [-4,-3,-2,-7,8,2,-3,-1]
    output: [2,3]

                              i
     index: [0, 1, 2, 3,4, 5, 6, 7]
            [4,-3,-2,-7,8,-2,-3,-1]
        idx: 2
        nums[2] = -2
    output: [2, 3]
    */

    let output = []

    for (let i = 0; i < nums.length; i++) {
        let idx = Math.abs(nums[i]) - 1

        if (nums[idx] < 0) {
            output.push(Math.abs(nums[i]))
        }

        nums[idx] = -Math.abs(nums[idx])
    }

    return output
};