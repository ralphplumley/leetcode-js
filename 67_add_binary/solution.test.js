const addBinary = require('./solution')

test('#1', ()=> {
    let str1 = '11010'
    let str2 = '011'
    expect(addBinary(str1, str2)).toEqual('11101')
})

test('#2', ()=> {
    let str1 = '11'
    let str2 = '1'
    expect(addBinary(str1, str2)).toEqual('100')
})