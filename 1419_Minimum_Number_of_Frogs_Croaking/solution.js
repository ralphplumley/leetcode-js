/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    /*
       {
         c: 2
         r: 2
         o: 2
         a: 2
         k: 2
       }
    */


    // create map variable
    // iterate through each char in str
    // increment char count in map
    // if c-k is greater than max, update max

    // all 5 values should be same
    // if not, return -1

    // return max

    let map = new Map()
    map.set('c', 0)
    map.set('r', 0)
    map.set('o', 0)
    map.set('a', 0)
    map.set('k', 0)

    let max = 0
    for (char of croakOfFrogs) {
        map.set(char, map.get(char) + 1)
        // check to see if the croak is in proper order
        // i.e. aoocrrackk should return -1, since it needs to be in c>r>o>a>k order
        if (!checkOrder(map)) {
            return -1
        }

        // update max
        const tempMax = map.get('c') - map.get('k')
        max = Math.max(max, tempMax)

    }

    // check to see if all values are the same
    let check = map.get('c')
    for (let [char, count] of map) {
        if (count !== check) return -1
    }

    return max
};

const checkOrder = function (map) {
    // make sure 'c' is not smaller than others after
    if (
        map.get('c') < map.get('r') ||
        map.get('c') < map.get('o') ||
        map.get('c') < map.get('a') ||
        map.get('c') < map.get('k')
    ) return false

    // make sure 'r' is not smaller than others after
    if (
        map.get('r') < map.get('o') ||
        map.get('r') < map.get('a') ||
        map.get('r') < map.get('k')
    ) return false

    // make sure 'r' is not smaller than others after
    if (
        map.get('o') < map.get('a') ||
        map.get('o') < map.get('k')
    ) return false

    // make sure 'a' is not smaller than 'k'
    if (map.get('a') < map.get('k')) return false

    // otherwise, return true
    return true
}
