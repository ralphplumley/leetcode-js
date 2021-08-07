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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function(root, subRoot) {

    const dfs = (tree, subtree) => {
        if (!tree) return
        if (tree.val === subtree.val) {
            let isIdentical = isIdenticalTree(tree, subtree)
            if (isIdentical) return true
        }

        if (dfs(tree.left, subtree) || dfs(tree.right, subtree)) return true

        return  false
    }

    const isIdenticalTree = (tree, subtree) => {
        if (!tree && !subtree) return true
        if (!tree || !subtree) return false
        return (tree.val === subtree.val) &&
            isIdenticalTree(tree.left, subtree.left) &&
            isIdenticalTree(tree.right, subtree.right)
    }

    return dfs(root, subRoot)
};
