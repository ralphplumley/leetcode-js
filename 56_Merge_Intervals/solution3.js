const merge = function(intervals) {
    if (!intervals.length) return intervals
    intervals.sort((a,b) => a[0] - b[0])
    let prev = intervals[0],
        result = [prev]

    for (let curr of intervals) {
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(curr[1], prev[1])
        } else {
            result.push(curr)
            prev = curr
        }
    }

    return result
};