let merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    const result = [intervals[0]]
    for (let [start, end] of intervals) {
        if (start <= result[result.length-1][1]) {
            const [startPrev, endPrev] = result.pop()
            result.push([startPrev, Math.max(end, endPrev)])
        } else {
            result.push([start, end])
        }
    }
    return result
}
let intervals = [[1,3],[2,6],[8,10],[15,18]]