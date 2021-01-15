const merge = require('./solution')

test('#1', () => {
    let arr = [[1,6], [2,6], [8,10], [15,18]]
    let solution = [[1,6], [8,10], [15,18]]
    expect(merge(arr)).toEqual(solution)
})

test('#2', () => {
    let arr = [[1,5], [5,6]]
    let solution = [[1,6]]
    expect(merge(arr)).toEqual(solution)
})
