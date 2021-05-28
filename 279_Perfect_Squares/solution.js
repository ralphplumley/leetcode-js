/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let square_nums = []
    for (let i = 1; i * i <= n; ++i) {
        square_nums.push(i * i)
    }

    let queue = new Set()
    queue.add(n)

    let level = 0

    while (queue.size > 0) {
        level += 1
        let next_queue = new Set()

        for (let remainder of queue) {
            for (let square of square_nums) {
                if (remainder === square) {
                    return level
                } else if (remainder < square) {
                    break
                } else {
                    next_queue.add(remainder - square)
                }
            }
        }

        queue = next_queue
    }

    return level
};

console.log(numSquares(12))
