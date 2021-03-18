/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
    /*

              | x^(n/2) * x^(n/2)   if n is even
        x^n = | x * x^(n-1)         if n is odd
              | 1                   if n is 0

        O(n log n)

     */
    if (n===0) return 1;

    let pow = Math.abs(n);

    let result = pow % 2 === 0 ? myPow(x * x,pow / 2) : myPow(x * x,(pow - 1) / 2) * x;

    return n < 0 ? 1 / result : result;
};

console.log(myPow(2.0000,3))