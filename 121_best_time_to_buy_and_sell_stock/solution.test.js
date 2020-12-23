const { TestScheduler } = require('jest')
const maxProfit = require('./solution')

test('Input [] should output 0', () => {
    const arr = []
    expect(maxProfit(arr)).toEqual(0)
})

test('Input [7,1,5,3,6,4] should output 5', () => {
    const arr = [7, 1, 5, 3, 6, 4]
    expect(maxProfit(arr)).toEqual(5)
})

test('Input [7,1,3,4,8,2] should output 7', () => {
    const arr = [7, 1, 3, 4, 8, 2]
    expect(maxProfit(arr)).toEqual(7)
})

