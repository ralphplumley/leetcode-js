const addStrings = require('./solution')

test('#1', () => {
    let str1 = '9'
    let str2 = '1'
    expect(addStrings(str1, str2)).toEqual('10')
})

test('#2', () => {
    let str1 = '99'
    let str2 = '9'
    expect(addStrings(str1, str2)).toEqual('108')
})

test('#3', () => {
    let str1 = '584'
    let str2 = '18'
    expect(addStrings(str1, str2)).toEqual('602')
})

test('#4', () => {
    let str1 = '9333852702227987'
    let str2 = '85731737104263'
    expect(addStrings(str1, str2)).toEqual('9419584439332250')
})

