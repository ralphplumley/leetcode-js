const isValid = require('./solution')

test('#1', () => {
    let str = '()'
    expect(isValid(str)).toEqual(true)
})

test('#2', () => {
    let str = '('
    expect(isValid(str)).toEqual(false)
})

test('#3', () => {
    let str = '([]{})'
    expect(isValid(str)).toEqual(true)
})