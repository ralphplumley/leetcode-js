const lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0

    let n = s.length,
        ans = 0

    let map = new Map() // current index of character
    // try to extend the range [left, right]
    for (let left = 0, right = 0; right < n; right++) {
        let char = s[right]
        if(map.has(char)) {
            left = Math.max(map.get(char), left)
        }
        ans = Math.max(ans, right - left + 1)
        map.set(char, right + 1)
    }
    return ans
};

let s = "abcabcd"
console.log(lengthOfLongestSubstring(s))