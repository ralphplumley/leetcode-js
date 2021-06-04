/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 1: Create adjacency list
    // 2: Find and start with all 'in-degrees' (the ones that are 0)
    // 3: For each source, add to our answer array, add each child's in-degrees to sources array

    let sorted_order = []
    if (numCourses <= 0) return sorted_order

    const inDegree = Array(numCourses).fill(0),
        graph = Array(numCourses).fill(0).map(() => Array())

    // build the graph
    prerequisites.forEach((tuple) => {
        const parent = tuple[1],
            child = tuple[0]

        graph[parent].push(child)
        inDegree[child]++
    })

    // find all the source in-degrees (0s)
    const sources = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            sources.push(i)
        }
    }

    // go through each in-degree source node to construct our answer
    while (sources.length > 0) {
        const vertex = sources.shift()
        sorted_order.push(vertex)
        graph[vertex].forEach((child) => {
            inDegree[child]--
            if (inDegree[child] === 0) {
                sources.push(child)
            }
        })
    }

    // check if there's a cycle
    if (sorted_order.length !== numCourses) return false
    return true
};

console.log(canFinish(4, [[1,0], [2,0], [2,1], [3,1]]))
