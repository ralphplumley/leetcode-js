/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    let result

    const dfs = (node) => {
        if (!node) return false

        const mid = (node.val === p.val || node.val === q.val) ? 1 : 0
        const left = dfs(node.left) ? 1 : 0
        const right = dfs(node.right) ? 1 : 0

        // set lca answer
        if (mid + left + right >= 2) result = node

        if (left > 0 || right > 0 || mid > 0) return true

        return false
    }

    dfs(root)

    // guranteed to have result
    return result
};

/*
    Time: O(n) - we traverse visit each node in the tree
    Space: O(n) - call stack will be the height of a skewed / unbalanced tree (so, a linked list), which could be N
*/
