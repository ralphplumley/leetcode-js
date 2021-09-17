/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function(board) {
    const DIRS = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    if (board === null || board.length === 0) return;

    let rows = board.length;
    let cols = board[0].length;

    let uf = new UnionFind(board);
    let dummyBorder = 'border';

    for (let x=0; x<rows; x++){
        for (let y=0; y<cols; y++){
            if (board[x][y] === 'O'){
                let id = `${x}_${y}`;
                if (x === 0 || x === rows-1 || y === 0 || y === cols-1){
                    uf.union(dummyBorder, id);
                }
                for (let dir of DIRS){
                    let nx = x + dir[0];
                    let ny = y + dir[1];
                    if (nx >= 0 && ny >=0 && nx < rows && ny < cols && board[nx][ny] === 'O'){
                        let nId = `${nx}_${ny}`;
                        uf.union(id, nId);
                    }
                }
            }
        }
    }

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            if (board[x][y] === 'O' && uf.find(`${x}_${y}`) !== uf.find(dummyBorder)) {
                board[x][y] = 'X';
            }
        }
    }

    return board

};

class UnionFind {
    constructor(board) {
        this.parent = {
            'border': 'border'
        }

        let rows = board.length,
            cols = board[0].length

        for (let x=0; x<rows; x++){
            for (let y=0; y<cols; y++){
                if (board[x][y] === 'O') {
                    let id = `${x}_${y}`;
                    this.parent[id] = id;
                }
            }
        }
    }

    find(x) {
        if (x === this.parent[x]) return x;
        this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX !== rootY){
            this.parent[rootX] = rootY;
        }
    }
}

let board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
console.log(solve(board))
