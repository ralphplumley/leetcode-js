/*

    create map from target
        targetMap.set(num, 1)
    create map from arr
        arrMap.set(num, 1)

    for each number in targetMap
        if number is not a key in arrMap
            return false

        if key:value for each dict doesn't match
            return false

    return true
 */
const canBeEqual = function(target, arr) {
    let targetMap = new Map()
    target.forEach((num) => {
        if(targetMap.has(num)) {
            targetMap.set(num, targetMap.get(num) + 1)
        } else {
            targetMap.set(num, 1)
        }
    })

    let arrMap = new Map()
    arr.forEach((num) => {
        if(arrMap.has(num)) {
            arrMap.set(num, arrMap.get(num) + 1)
        } else {
            arrMap.set(num, 1)
        }
    })

    for (let [key, value] of targetMap) {
        if (!arrMap.has(key)) return false
        if (arrMap.get(key) !== targetMap.get(key)) return false
    }

    return true
};

const target = [1,2,3,4]
const arr = [2,4,1,3]

console.log(canBeEqual(target, arr))














