/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (!intervals.length) return 0
    intervals.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])

    let minHeap = []
    for (let i = 0; i < intervals.length; ++i) {
        let [start, end] = intervals[i]
        if (!minHeap.length) minHeap.push(end)
        else {
            let earliestAvailableTime = minHeap[0]
            if (start < earliestAvailableTime) {
                minHeap.push(end)
            } else {
                minHeap[0] = Math.max(minHeap[0], end)
            }
            minHeap.sort((a,b) => a > b ? 1 : - 1)
        }
    }

    return minHeap.length
};

const intervals = [[1,3], [2, 4], [3,5], [4,6]]
console.log(minMeetingRooms(intervals))
