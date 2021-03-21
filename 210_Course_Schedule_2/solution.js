/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function(numCourses, prerequisites) {
    const order = [];
    const queue = [];
    const graph = new Map();
    const indegree = Array(numCourses).fill(0);

    for (const [e, v] of prerequisites) {
        // build graph map
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        // build indegree array
        indegree[e]++;
    }

    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    while (queue.length) {
        const v = queue.shift();
        if (graph.has(v)) {
            for (const e of graph.get(v)) {
                indegree[e]--;
                if (indegree[e] === 0) queue.push(e);
            }
        }
        order.push(v);
    }

    return numCourses === order.length ? order : [];
};

numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
console.log(findOrder(numCourses, prerequisites))