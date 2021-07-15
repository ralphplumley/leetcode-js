/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*
    Time: O(C * N), C = number of coins, N = amount
    Space: O(C), C = memo
 */

var coinChange = function(coins, amount) {
    const memo = new Map();

    function permute(remaining) {

        if (memo.has(remaining)) return memo.get(remaining)
        if (remaining === 0) return 0;
        let min = Infinity;

        for (let coin of coins) {
            if (remaining - coin >= 0) min = Math.min(min, permute(remaining - coin));
        }
        memo.set(remaining, min+1);
        return min + 1;
    }

    const result = permute(amount);
    return result === Infinity ? -1 : result;
};

console.log(coinChange([1,2,5], 11))
