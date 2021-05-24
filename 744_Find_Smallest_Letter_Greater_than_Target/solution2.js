/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if (target < letters[0] || target > letters[letters.length - 1]) return letters[0]

    let low = 0,
        high = letters.length

    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2)

        if (letters[mid] <= target) low = mid + 1
        else high = mid
    }

    return letters[low % letters.length]
};
