/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0]),
        parent

    if (preorder.length === 1) return root

    const dfs = (node) => {
        if (node.val < parent.val) {
            if (parent.left) {
                parent = parent.left
                dfs(node)
            } else {
                parent.left = node
            }
        }

        if (node.val > parent.val) {
            if (parent.right) {
                parent = parent.right
                dfs(node)
            } else {
                parent.right = node
            }
        }
    }

    // kick it off
    for (let i = 1; i < preorder.length; ++i) {
        parent = root
        const node = new TreeNode(preorder[i])
        dfs(node)
    }

    return root

};
