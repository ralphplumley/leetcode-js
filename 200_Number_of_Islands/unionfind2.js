// Weighted quick-union and path compression

const numIslands = function(grid) {
    if (grid === null || grid.length === 0) return 0

    let num_rows = grid.length,
        num_cols = grid[0].length,
        uf = new UnionFind(grid)

    for (let row = 0; row < num_rows; ++row) {
        for (let col = 0; col < num_cols; ++col) {
            if (grid[row][col] === '1') {
                grid[row][col] = '0'

                if (row - 1 >= 0 && grid[row-1][col] === '1') {
                    uf.union(row * num_cols + col, (row - 1) * num_cols + col)
                }

                if (row + 1 < num_rows && grid[row+1][col] === '1') {
                    uf.union(row * num_cols + col, (row + 1) * num_cols + col)
                }

                if (col - 1 >= 0 && grid[row][col-1] === '1') {
                    uf.union(row * num_cols + col, row  * num_cols + col - 1)
                }

                if (col + 1 < num_cols && grid[row][col+1] === '1') {
                    uf.union(row * num_cols + col, row  * num_cols + col + 1)
                }
            }
        }
    }

    return uf.getCount()
};

class UnionFind {
   constructor(grid) {
       this.count = 0

       let m = grid.length
       let n = grid[0].length
       this.parent = new Array(m*n)
       this.rank = new Array(m*n)

       for (let i = 0; i < m; ++i) {
           for (let j = 0; j < n; ++j) {
               const idx = i * n + j
               if (grid[i][j] === '1') {
                   this.parent[idx] = idx
                   ++this.count
               } else {
                   this.parent[idx] = -1
               }
               this.rank[i * n + j] = 0
           }
       }
   }

   find(i) { // path compression
       if (this.parent[i] !== i) {
           const val = this.find(this.parent[i])
           this.parent[i] = val
       }
       return this.parent[i]
   }

   union(a, b) {
       let root_a = this.find(a)
       let root_b = this.find(b)

       if (root_a !== root_b) {
           if (this.rank[root_a] > this.rank[root_b]) {
               this.parent[root_b] = root_a
           } else if (this.rank[root_a] < this.rank[root_b]) {
               this.parent[root_a] = root_b
           } else {
               this.parent[root_b] = root_a
               this.rank[root_a] += 1
           }
           --this.count
       }
   }

   getCount() {
       return this.count
   }
}

const input = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
console.log(numIslands(input))