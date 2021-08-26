/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) return ""

    const map = new Map()
    for (let i = 0; i < t.length; ++i) {
        let char = t.charAt(i)
        if (map.has(char)) map.set(char, map.get(char) + 1)
        else map.set(char, 1)
    }

    // number of unique chars in t, which need to e present in the desired window
    let required = map.size,
        left = 0,
        right = 0

    // formed is used to keep track of how many unique chars in t are present
    //   in the current window in its desired frequency.
    // e.g. if t is "AABC" then the window must have two A's, one B and one C
    let formed = 0

    // dictionary which keeps a count of all the unique characters in the current window
    let windowCounts = new Map()

    // ans list in the form of (window length, left, right)
    let ans = [-1, 0, 0]

    while (right < s.length) {
        // add one char from the right to the window
        let char = s.charAt(right)
        let count = 0
        if (windowCounts.has(char)) count = windowCounts.get(char)
        windowCounts.set(char, count + 1)

        // if the frequency of the current character added equals to the desired
        //   count in t, then increment the formed count by 1
        if (map.has(char) && windowCounts.get(char) === map.get(char)) formed++

        // try and contract the window until the point where it ceases to be 'desireable'
        while (left <= right && formed === required) {
            char = s.charAt(left)

            // save the smallest windows until now
            if (ans[0] === -1 || right - left + 1 < ans[0]) {
                ans = [right - left + 1, left, right]
            }

            // the character at the position pointed by the 'left' pointer is no longer
            //   part of the window
            windowCounts.set(char, windowCounts.get(char) - 1)
            if (map.has(char) && windowCounts.get(char) < map.get(char)) formed--

            // move the left pointer ahead, this would help to look for new window
            left++
        }

        // keep expanding the window once we are done contracting
        right++
    }

    return ans[0] === -1 ? "" : s.slice(ans[1], ans[2] + 1)
};