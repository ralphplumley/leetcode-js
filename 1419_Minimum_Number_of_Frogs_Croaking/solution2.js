const minNumberOfFrogs = function(croakOfFrogs) {
    if (croakOfFrogs.length % 5 !== 0) return -1

    const count = new Array(4).fill(0)
    const indexes = new Map([
        ['c', 0],
        ['r', 1],
        ['o', 2],
        ['a', 3],
        ['k', 4]
    ])

    let frogs = 0,
        max = 0

    for (const char of croakOfFrogs) {
        const index = indexes.get(char)

        if (index < 4) count[index]++
        else frogs--

        if (index !== 0 && count[index - 1] === 0) return -1
        count[index - 1]--

        if (index === 0) max = Math.max(max, ++frogs)
    }

    return max
}

const input = "croakcrook"
console.log(minNumberOfFrogs(input))
