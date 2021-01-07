const { isAlienSorted, lex_order} = require('./solution')

test('init', ()=>{
    let arr = ["hello", "leetcode"]
    let order = "hlabcdefgijkmnopqrstuvwxyz"
    expect(isAlienSorted(arr, order)).toEqual(true)
})
