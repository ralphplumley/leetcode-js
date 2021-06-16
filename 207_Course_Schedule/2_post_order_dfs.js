/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    /*
         Approach 2: Postorder DFS
         Time: O(abs(E) + abs(V)) - E is num dependencies, V is num of courses
         Space: O(abs(E) + abs(V)) -
    */

    let courseDict = new Map()

    // build the graph first
    prerequisites.forEach(relation => {
        // relation[0] depends on relation[1]
        if (courseDict.has(relation[1])) {
            courseDict.get(relation[1]).push(relation[0])
        } else {
            let nextCourses = []
            nextCourses.push(relation[0])
            courseDict.set(relation[1], nextCourses)
        }
    })

    let checked = new Array(numCourses).fill(false)
    let path = new Array(numCourses).fill(false)

    for (let currCourse = 0; currCourse < numCourses; ++currCourse) {
        if (isCyclic(currCourse, courseDict, checked, path)) return false
    }

    return true
};

// Postorder DFS check that no cycle would be formed starting from currCourse
const isCyclic = function(currCourse, courseDict, checked, path) {

    if (checked[currCourse]) {
        // this node has been checked, no cycle would be formed with this node
        return false
    }

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

    // postorder DFS, to visit all its children first
    const courses = courseDict.get(currCourse)
    for (let i = 0; i < courses.length; i++) {
        ret = isCyclic(courses[i], courseDict, checked, path)
        if (ret) break
    }

    // after the visits of children, we come back to process the node itself
    // remove the node from the path
    path[currCourse] = false

    // now that we've visited the nodes in the downstream, we complete the check of this node
    checked[currCourse] = true

    return ret
}

console.log(canFinish(2,[[1,0]]))
