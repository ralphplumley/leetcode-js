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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map = new Map()

    inorder.forEach((e, i) => {
        map.set(e, i)
    })

    const recur = function(start, end) {
        if (start > end) return null
        let root = new TreeNode(preorder.shift())
        root.left = recur(start, map.get(root.val) -1)
        root.right = recur(map.get(root.val) + 1, end)
        return root
    }

    return recur(0, inorder.length - 1)
}
