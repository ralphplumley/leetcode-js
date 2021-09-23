/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length === 0) return true

    intervals.sort((a,b) => a[1] - b[1])

    for (let i = 0; i < intervals.length - 1; ++i) {
        const next = intervals[i + 1],
            end = intervals[i][1]

        if (end > next[0]) return false
    }

    return true
};
