/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

let pathSum = function(root, sum) {
    let current_path = []
    return dfs(root, sum, current_path)
};

const dfs = function(node, sum, current_path) {
    if (!node) return 0

    current_path.push(node.val)

    let pathSum = 0, pathCount = 0

    // find the sums of all the subpaths in the current path list
    for (let i = current_path.length - 1; i >= 0; i--) {
        pathSum += current_path[i]
        if (pathSum === sum) {
            pathCount += 1
        }
    }

    pathCount += dfs(node.left, sum, current_path)
    pathCount += dfs(node.right, sum, current_path)

    current_path.pop()
    return pathCount
}

// Time Complexity: Worst case O(n^2), as the loop inside that is N
// Space Complexity: O(h) or O(n). We are going to each node in the tree.