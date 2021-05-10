/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const wallsAndGates = function(rooms) {

    if (rooms.length === 0) return // if no rooms, return

    const EMPTY = 2147483647,
        GATE = 0,
        DIRECTIONS = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]

    let queue = [],
        m = rooms.length,
        n = rooms[0].length

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rooms[i][j] === GATE) {
                queue.push([i, j]) // find and save all positions of all teh GATEs in queue
            }
        }
    }

    while (queue.length > 0) {
        const curr = queue.shift()
        const row = curr[0],
            col = curr[1]

        for (let dir of DIRECTIONS) {
            const r = row + dir[0]
            const c = col + dir[1]

            // if it's out of bounds, continue
            if (r < 0 || c < 0 || r >= m || c >= n || rooms[r][c] !== EMPTY) continue

            rooms[r][c] = rooms[row][col] + 1
            queue.push([r,c])
        }
    }
};

let rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
console.log(wallsAndGates(rooms))















