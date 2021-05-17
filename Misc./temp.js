const main = function (str) {
    let result = []
    let map = buildFreqTables(str)
    printPermutations(map, "", str.length, result)
    return result
}

const buildFreqTables = function (str) {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i)
        if (!map.has(char)) {
            map.set(char, 1)
        } else {
            map.set(char, map.get(char) + 1)
        }
    }
    return map
}

const printPermutations = function (map, prefix, remaining, result) {
    // base case, permutation has been completed
    if (remaining === 0) {
        result.push(prefix)
        return
    }

    // try remaining letters for next char, and generate remaining permutations
    for (let [char, count] of map) {
        if (count > 0) {
            map.set(char, count - 1)
            printPermutations(map, prefix + char, remaining - 1, result)
            map.set(char, count)
        }
    }
}

let str = "abc"
console.log(main(str))
