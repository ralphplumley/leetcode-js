/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let ans = []
    let min = intervals[0][0]
    let max = intervals[0][1]

    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i]
        const start = interval[0]
        const end = interval[1]
        if ((start >= min && start <= max) || (min >= start && min <= end)) {
            min = Math.min(min, start)
            max = Math.max(max, end)
        } else {
            ans.push([min, max])
            min = start
            max = end
        }
    }

    ans.push([min, max])

    return ans
};

const intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]]
console.log(merge(intervals))