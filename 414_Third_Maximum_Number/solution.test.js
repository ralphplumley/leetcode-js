const thirdMax = require('./solution')

test('#1', () => {
    let arr = [3, 2, 1]
    expect(thirdMax(arr)).toEqual(1)
})

test('#2', () => {
    let arr = [2, 1]
    expect(thirdMax(arr)).toEqual(2)
})

test('#3', () => {
    let arr = [2, 3, 2, 1]
    expect(thirdMax(arr)).toEqual(1)
})

test('#4', () => {
    let arr = [1, 2, 3]
    expect(thirdMax(arr)).toEqual(1)
})



