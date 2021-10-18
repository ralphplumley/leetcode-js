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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {

    const dfs = (node, parent, val, depth) => {
        if (!node) return

        // if x or y is node's value
        if (node.val === val) return [parent, depth]

        // if it's a leaf node
        if (!node.left && !node.right) return

        return dfs(node.left, node, val, depth + 1) || dfs(node.right, node, val, depth + 1)
    }

    const x_parent = dfs(root, null, x, 0),
        y_parent = dfs(root, null, y, 0)

    // if parents are not the same
    if (x_parent[0] !== y_parent[0]) {
        // if on same level
        if (x_parent[1] === y_parent[1]) {
            return true
        }
    }

    return false
};
