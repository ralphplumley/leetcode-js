const { isAlienSorted, lex_order} = require('./solution')

xtest('init', ()=>{
    let arr = ["hello", "leetcode"]
    let order = "hlabcdefgijkmnopqrstuvwxyz"
    expect(isAlienSorted(arr, order)).toEqual(true)
})
