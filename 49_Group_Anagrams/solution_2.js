/*
 */
const groupAnagrams = (strs) => {
    const map = new Map()
    for (let i = 0; i < strs.length; ++i) {
        const word = strs[i]
        const arr = new Array(26).fill(0)

        word.split('').forEach( char => {
            const index = char.charCodeAt() - 97
            arr[index]++
        })

        const key = addDelimiter(arr)
        if (map.has(key)) map.get(key).push(word)
        else map.set(key, [word])
    }

    const result = []
    for (let [key, value] of map) {
        result.push(value)
    }

    return result
}

const addDelimiter = (arr) => {
    const result = []
    arr.forEach(el => {
        result.push(JSON.stringify(el))
        result.push('#')
    })
    return result.join('')
}