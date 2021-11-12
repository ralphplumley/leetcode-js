/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/*
// Iterate through each bit. To check each bit, use a bit mask with logical and (&)
// If that bit & mask === 0, that bit is 1, so increment our counter
// TC: O(1) - single loop through
// SC: O(1) - no extra store used

var hammingWeight = function(n) {
    let bits = 0,
        mask = 1

    for (let i = 0; i < 32; ++i) {
        const res = n & mask
        if (res !== 0) bits++
        mask <<= 1
    }

    return bits
};
*/

/*
    Bit Maniuplation Trick - instead of checking each bit, we repeatedly flip the least-significant 1-bit of the number (flip to 0), and 1 to the sum each time.
    When the input number becomes 0, we know it does not have any more 1-bits, then we return the sum.

    Take bit-wise and of n and n-1
    n & (n-1)

            if n = 11

           bit values: 8 4 2 1
                       -------
         11 in binary: 1 0 1 1
 n - 1 (10) in binary: 1 0 1 0
                       -------
if we bit-wise and it: 1 0 1 0 <-- that's 8. Now do 8 and 8-1. Keep repeating until n is 0.

*/
var hammingWeight = function(n) {
    let count = 0

    while (n !== 0) {
        count++
        n &= (n - 1)
    }

    return count
};
