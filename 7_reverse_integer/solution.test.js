const reverse = require('./solution')

test('#1', () => {
    let x = 123
    let solution = 321
    expect(reverse((x))).toEqual(solution)
})

test('#2', () => {
    let x = -123
    let solution = -321
    expect(reverse((x))).toEqual(solution)
})

test('#3', () => {
    let x = -120
    let solution = -21
    expect(reverse((x))).toEqual(solution)
})

test('#4', () => {
    let x = 0
    let solution = 0
    expect(reverse((x))).toEqual(solution)
})

test('#5', () => {
    let x = 1534236469
    let solution = 0
    expect(reverse((x))).toEqual(solution)
})

test('#6', () => {
    let x = -1534236469
    let solution = 0
    expect(reverse((x))).toEqual(solution)
})