const isPalindrome = require('./solution')

test('#1', () => {
    let str = ""
    expect(isPalindrome(str)).toEqual(true)
})

test('#2', () => {
    let str = "0p"
    expect(isPalindrome(str)).toEqual(false)
})

test('#3', () => {
    let str = "A man, a plan, a canal: Panama"
    expect(isPalindrome(str)).toEqual(true)
})

test('#4', () => {
    let str = "race a car"
    expect(isPalindrome(str)).toEqual(false)
})


