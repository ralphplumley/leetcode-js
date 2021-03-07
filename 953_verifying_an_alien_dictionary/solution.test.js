// const { isAlienSorted, lex_order} = require('./solution')
const isAlienSorted = require('./solution')
// const isAlienSorted = require('./attempt2')

test('setup', ()=>{
    expect(1+1).toEqual(2)
})

test('#1', ()=>{
    let words = ["word","world","row"]
    let order = "worldabcefghijkmnpqstuvxyz"
    expect(isAlienSorted(words, order)).toBeFalsy()
})

test('#2', ()=>{
    let words = ["hello", "leetcode"]
    let order = "hlabcdefgijkmnopqrstuvwxyz"
    expect(isAlienSorted(words, order)).toBeTruthy()
})

test('#3', ()=>{
    let words = ["apple","app"]
    let order = "abcdefghijklmnopqrstuvwxyz"
    expect(isAlienSorted(words, order)).toBeFalsy()
})

test('#4', ()=>{
    let words = ["app","apple"]
    let order = "abcdefghijklmnopqrstuvwxyz"
    expect(isAlienSorted(words, order)).toBeTruthy()
})

test('#5', ()=>{
    let words = ["a","b"]
    let order = "abcdefghijklmnopqrstuvwxyz"
    expect(isAlienSorted(words, order)).toBeTruthy()
})

test('#6', ()=>{
    let words = ["b","a"]
    let order = "abcdefghijklmnopqrstuvwxyz"
    expect(isAlienSorted(words, order)).toBeFalsy()
})

test('#7', ()=>{
    let words = ["a","bb"]
    let order = "abcdefghijklmnopqrstuvwxyz"
    expect(isAlienSorted(words, order)).toBeTruthy()
})

test('#8', ()=>{
    let words = ["kuvp","q"]
    let order = "ngxlkthsjuoqcpavbfdermiywz"
    expect(isAlienSorted(words, order)).toBeTruthy()
})

