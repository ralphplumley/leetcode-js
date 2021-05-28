/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const dead = new Set(deadends),
        queue = [['0000', 0]],
        seen = new Set(['0000'])

    for ( let [curr, turns] of queue) {
        if (curr === target) return turns
        if (dead.has(curr)) continue
        for (let next of getNextStates(curr)) {
            if (seen.has(next)) continue
            seen.add(next)
            queue.push([next, turns + 1])
        }
    }

    return -1
};

function getNextStates(s = '0000') {
    const ans = []
    for (let i = 0; i < s.length; i++) {
        let a = s.slice(0, i) + ((+s[i] + 1) % 10).toString() + s.slice(i + 1)
        ans.push(a)
        let b = s.slice(0, i) + ((+s[i] + 9) % 10).toString() + s.slice(i + 1)
        ans.push(b)
    }

    return ans
}

const deadEnds1 = ["0201","0101","0102","1212","2002"]
const target1 = "0202"

console.log(openLock(deadEnds1, target1))
