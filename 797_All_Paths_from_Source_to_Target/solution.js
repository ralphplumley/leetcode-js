/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const target = graph.length - 1
    const results = []

    const backtrack = (currentNode, path) => {
        // base case
        if (currentNode === target) {
            // make a deep copy of the path
            results.push([...path])
            return
        }

        // explore the neighbor nodes one after another
        for (let nextNode of graph[currentNode]) {
            // mark the choice before backtracking
            path.push(nextNode)
            backtrack(nextNode, path)
            path.pop()
        }
    }

    const path = [0]
    // kickoff backtracking
    backtrack(0, path)
    return results
};
/*
    N = number of nodes in graph
    TC: O(2^N * N)
    SC: O(2^N * N)
*/