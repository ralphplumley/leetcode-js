const maxSubArray = require('./solution')

test('test #1', () => {
    let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    expect(maxSubArray(arr)).toEqual(6)
})

test('test #2', () => {
    let arr = [1]
    expect(maxSubArray(arr)).toEqual(1)
})

test('test #3', () => {
    let arr = [0]
    expect(maxSubArray(arr)).toEqual(0)
})

test('test #4', () => {
    let arr = [-1]
    expect(maxSubArray(arr)).toEqual(-1)
})

test('test #5', () => {
    let arr = [-2147483647]
    expect(maxSubArray(arr)).toEqual(-2147483647)
})