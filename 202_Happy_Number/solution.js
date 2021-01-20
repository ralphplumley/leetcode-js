const find_happy_number = function(num) {
    let dict = {}
    while (num) {
        let newNum = getNew(num)
        if (newNum === 1) return true
        if (dict.hasOwnProperty(newNum)) return false
        else dict[newNum] = true
        num = newNum
    }
};

const getNew = function(num) {
    let arr = Array.from(num.toString()).map(Number)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += (arr[i] * arr[i])
    }
    return sum
}