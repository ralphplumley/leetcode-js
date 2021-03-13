const lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0

    let left = 0,
        right = 0

    let map = new Map()

    let curr = []
    let longest = null

    while (right < s.length) {
        let char = s.charAt(right)

        if (map.get(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }

        if (map.get(char) > 1) {
            if (longest === null || curr.length > longest.length) {
                longest = curr.join('')
            }

            while (map.get(char) > 1) {
                left++
                let charRemoved = curr.shift()
                map.set(charRemoved, map.get(charRemoved) - 1)
            }
        }

        curr.push(s[right])

        right++
    }

    // if input is "abc" (no duplicates at all)
    return longest ? Math.max(longest.length, curr.length) : curr.length
};

let s = "aaaaaaaaaaaaabcde"

console.log(lengthOfLongestSubstring(s))