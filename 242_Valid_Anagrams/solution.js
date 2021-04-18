/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map_s = new Map()
    s.split('').forEach((char) => {
        if (map_s.has(char)) {
            map_s.set(char, map_s.get(char) + 1)
        } else {
            map_s.set(char, 1)
        }
    })

    let map_t = new Map()
    t.split('').forEach((char) => {
        if (map_t.has(char)) {
            map_t.set(char, map_t.get(char) + 1)
        } else {
            map_t.set(char, 1)
        }
    })


    for (let [key, value] of map_s) {
        if (map_t.has(key)) {
            if (map_t.get(key) !== value) {
                return false
            }
        } else {
            return false
        }
    }

    return map_s.size === map_t.size

};