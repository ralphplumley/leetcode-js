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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []

    let levels = []

    const dfs = function(node, level) {
        // start at current level
        if (levels.length === level) {
            levels.push([])
        }

        // fulfill the current level
        levels[level].push(node.val)

        // process child nodes for the next levelo
        if (node.left) dfs(node.left, level + 1)
        if (node.right) dfs(node.right, level + 1)
    }

    dfs(root, 0)
    return levels
};