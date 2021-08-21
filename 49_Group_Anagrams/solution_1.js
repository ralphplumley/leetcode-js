/*
 Time: O(num words) * log 100
       O(num words) * 2
       O(num words)

 Space: O(num words), used a map
 */
const groupAnagrams = (strs) => {
    const map = new Map()
    strs.forEach(word => {
        const sorted = word.split('').sort().join('')
        if (map.has(sorted)) map.get(sorted).push(word)
        else map.set(sorted, [word])
    })

    const result = []
    for (let [key, value] of map) {
        result.push(value)
    }

    return result
}