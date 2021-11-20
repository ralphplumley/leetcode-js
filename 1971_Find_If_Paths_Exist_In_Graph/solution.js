/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function(n, edges, start, end) {
    // create a hashmap to be used as our adjacency list
    const map = new Map(),
        visited = new Set()

    // build the adjacency list (undirected)
    for (const [v, e] of edges) {
        if (map.has(v)) {
            map.get(v).push(e)
        } else {
            map.set(v, [e])
        }

        if (map.has(e)) {
            map.get(e).push(v)
        } else {
            map.set(e, [v])
        }
    }

    // define a recursive DFS helper
    function dfs(v) {
        // add to visited set
        visited.add(v)

        // get adjacent vertices
        const edges = map.get(v)

        // for all adjacent vertices, run DFS
        if (edges) {
            for (const e of edges) {
                if (!visited.has(e)) dfs(e)
            }
        }
    }

    // DFS from starting input node
    dfs(start)

    // return true/false if our visited set has our end node
    return visited.has(end)

};
