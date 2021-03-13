/*
    do binarysearch to find start
    if we find a start
        do binarysearch to find end (we should use the found start as this start bound)
    else
        return [-1,-1] (no need to do second binarysearch if start doesn't exist)

    return our two binarysearches in a tuple ([start, end])
 */
const searchRange = function(nums, target) {
    let ans = [-1, -1]
    ans[0] = binarySearch(nums, target, false)

    if (ans[0] !== -1) {
        ans[1] = binarySearch(nums, target, true)
    }

    return ans
};

const binarySearch = function(nums, target, findMidIndex) {
    let keyIndex = -1
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        let mid = Math.floor(start + ((end - start) / 2))
        let num = nums[mid]

        if (target < num) {
            end = mid - 1
        } else if (target > num) {
            start = mid + 1
        } else { // found the target
            keyIndex = mid
            if (findMidIndex) { // search ahead to find end bound
                start = mid + 1
            } else { // search behind to find start bound
                end = mid - 1
            }
        }
    }

    return keyIndex
}
