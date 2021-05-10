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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function(root) {

    // right, left, root -> postorder DFS
    // set left child to null & set right child to the previous node
    let prev = null

    const traverse = (node) => {
        if (node === null) return

        traverse(node.right)
        traverse(node.left)

        node.left = null
        node.right = prev
        prev = node
    }

    // kick it off
    traverse(root)

};
