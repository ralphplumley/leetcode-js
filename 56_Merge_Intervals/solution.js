/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let result = []
    let min = null
    let max = null
    for (let i = 0; i < intervals.length; i++) {

        let curr = intervals[i]
        let x = curr[0]
        let y = curr[1]
        if (min === null) min = x
        if (max === null) max = y

        if ( x > max) {
           result.push([min,max])
            min = x
            max = y
        }

        if (x <= min) {
            min = x
        }

        if (y >= max) {
            max = y
        }
    }
    result.push([min, max])
    return result
};

// console.log(merge([[1,4],[4,5]]))
module.exports = merge