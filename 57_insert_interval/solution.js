/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a,b) => a[0] - b[0])

    let merged = [];
    let start = intervals[0][0]
    let end = intervals[0][1]

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i]
        if (interval[0] <= end) {
            end = Math.max(interval[1], end)
        } else {
            merged.push(new Array(start, end))
            start = interval[0]
            end = interval[1]
        }
    }
    merged.push(new Array(start, end))
    return merged;
};