/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
    coins.sort((a,b) => {
        return a - b
    })

    // create an array with amount+1 slots
    // we are going to go bottom up, and fill up our array
    // the amount~th slot will be the answer
    // we'll set each slot starting out at amount+1
    let dp = new Array(amount+1).fill(amount+1)

    // setup the bottom / first one
    dp[0] = 0

    // loop through amount times
    for (let i = 0; i <= amount; i++) {

        // check if we can take each coin within i amount
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j]
            if (coin <= i) {

                // set slot to minimium of it's current or, 1 + an answer we've already solved
                dp[i] = Math.min(dp[i], 1 + dp[ i - coin ])
            } else {
                // since coins are sorted, if a coin is too big, no need to do the subsquent ones
                break
            }
        }
    }

    // check the amount~th slot
    // if it's still amount+1, it didn't get updated, which means there's no answer
    return dp[amount] > amount ? -1 : dp[amount]
};

let coins = [474,83,404,3],
    amount = 264

console.log(coinChange(coins, amount))