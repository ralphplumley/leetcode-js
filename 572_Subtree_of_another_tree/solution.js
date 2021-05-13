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
    if (subRoot === null) return true  // empty tree is always a subtree
    return subTree(root, subRoot)
};

const subTree = function(root, subRoot) {
    if (root === null) {
        return false // big tree empty
    } else if (root.val === subRoot.val && matchTree(root, subRoot)) {
        return true
    }

    return subTree(root.left, subRoot) || subTree(root.right, subRoot)
}

const matchTree = function(root, subRoot) {
    if (root === null && subRoot === null) {
        return true // nothing left in subtree
    } else if (root === null || subRoot === null) {
        return false
    } else if (root.val !== subRoot.val) {
        return false
    } else {
        return matchTree(root.left, subRoot.left) && matchTree(root.right, subRoot.right)
    }
}
