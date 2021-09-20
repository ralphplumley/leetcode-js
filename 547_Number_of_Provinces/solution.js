/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const ROWS = isConnected.length,
        COLS = isConnected[0].length,
        UF = new UnionFind(ROWS)

    for (let row = 0; row < ROWS; ++row) {
        for (let col = 0; col < COLS; ++col) {
            if (isConnected[row][col] === 1) UF.union(row, col)
        }
    }

    return UF.groups

};

class UnionFind {
    constructor(n) {
        this.parent = [...Array(n)].map((_, i) => i)
        this.groups = n
    }

    union(a,b) {
        const rootA = this.find(a),
            rootB = this.find(b)

        if (rootA !== rootB) {
            this.parent[rootB] = rootA
            this.groups--
        }
    }

    find(x) {
        if (this.parent[x] === x) return x
        this.parent[x] = this.find(this.parent[x])
        return this.parent[x]
    }
}
