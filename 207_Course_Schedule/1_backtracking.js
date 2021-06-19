/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    /*
         Approach 1: Backtracking - time limit exceeded
         Time: O(abs(E) + abs(V)^2) - E is num dependencies, V is num of courses
         Space: O(abs(E) + abs(V)) - we build a graph data structure, also employed a sort of bitmap to keep track of all visited nodes which consumes abs(V) space, we also implement the function in recursion, which would incur additional memory consumption call on the stack.
    */

    // course -> list of next courses
    let courseDict = new Map()

    // build the graph first
    prerequisites.forEach((relation) => {
        // relation[0] depends on relation[1]
        if (courseDict.has(relation[1])) {
            // courseDict.set(relation[1], courseDict.get(relation[1]).push(relation[0]))
            courseDict.get(relation[1]).push(relation[0])
        } else {
            let nextCourses = []
            nextCourses.push(relation[0])
            courseDict.set(relation[1], nextCourses)
        }
    })

    let path = new Array(numCourses).fill(false)

    for (let currCourse = 0; currCourse < numCourses; ++currCourse) {
        if (isCyclic(currCourse, courseDict, path)) return false
    }

    return true
};

const isCyclic = function(currCourse, courseDict, path) {
    if (path[currCourse]) {
        // come across a previously visited node, i.e. detect the cycle
        return true
    }

    if (!courseDict.has(currCourse)) {
        // no following courses, no loop
        return false
    }

    // before backtracking, mark the node in the path
    path[currCourse] = true

    // backtracking
    let ret = false

    const courses = courseDict.get(currCourse)
    for (let i = 0; i < courses.length; i++) {
        ret = isCyclic(courses[i], courseDict, path)
        if (ret) break
    }

    // after backtracking, remove the node from the path
    path[currCourse] = false
    return ret
}

console.log(canFinish(2,[[1,0]]))