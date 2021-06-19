/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const sortedOrder = []
    if (numCourses <= 0) return true

    // a. initialize our graph
    const indegree = new Array(numCourses).fill(0) // count of prereqs
    const graph = new Array(numCourses).fill(0).map(() => Array()) // adjacency list

    // b. build the graph
    prerequisites.forEach((prereq) => {
        const parent = prereq[1],
            child = prereq[0]

        graph[parent].push(child)
        indegree[child]++
    })

    // c. find all the sources, i.e. courses without prereqs
    const sources = []
    for (let i = 0; i < indegree.length; i++) {
        if(indegree[i] === 0) sources.push(i)
    }

    // d. for each source, add it to the sortedOrder and subtract one from all of its' children's indegrees
    //.   if a child's in-degree becomes zero, add it to the source queue
    while (sources.length > 0) {
        const vertex = sources.shift()
        sortedOrder.push(vertex)
        graph[vertex].forEach(child => {
            indegree[child] -= 1
            if (indegree[child] === 0) sources.push(child)
        })
    }

    if (sortedOrder.length !== numCourses) return false
    return true
};