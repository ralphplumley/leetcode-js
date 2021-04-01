/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
    if (n < 2) return 0

    const sieve = new Array(n + 1).fill(false)

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!sieve[i]) {
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = true
            }
        }
    }

    let count = 0

    for (let i = 2; i < n; i++) {
        if (sieve[i] === false) count++
    }

    return count
};
