/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    const UF = new UnionFind(n)

    for (let i = 0; i < edges.length; ++i) {
        const [root, childIndex] = edges[i]

        if (UF.parent[childIndex] !== null) {
            return false
        }

        UF.setRoot(root, childIndex)
    }

    for (let i = 0; i < UF.parent.length; ++i) {
        if (UF.parent[i] === null) return false
    }

    return true
};

class UnionFind {
    constructor(n) {
        //this.parent = new Array(n).fill(0).map((_, i) => i)
        this.parent = new Array(n).fill(null)
    }

    setRoot(root, childIndex) {
        this.parent[childIndex] = root
    }

    union(a, b) {
        const rootA = this.find(a),
            rootB = this.find(b)

        if (rootA !== rootB) {
            this.parent[rootB] = rootA
        }
    }

    find(x) {
        if (this.parent[x] === x) return x
        this.parent[x] = this.find(this.parent[x])
        return this.parent[x]
    }
}
const edges = [[1,0]]

console.log(validTree(2, edges))
