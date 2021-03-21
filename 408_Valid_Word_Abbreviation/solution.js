/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */

const validWordAbbreviation = function(word, abbr) {
    if (word == null || abbr == null) return false

    let i = 0,
        j = 0

    while (i < word.length && j < abbr.length) {
       if (isNum(abbr[j]))  {
          if (abbr[j] === '0') return false
          let n = 0
          while (j < abbr.length && isNum(abbr[j])) {
              n = n * 10 + Number(abbr[j])
              j++
          }
          i += n
       } else {
           if (word[i] !== abbr[j]) return false
           i++
           j++
       }
    }
    return i === word.length && j === abbr.length
};

const isNum = c => /\d/.test(c);

s = "internationalization", abbr = "i12iz4n"
console.log(validWordAbbreviation(s, abbr))
