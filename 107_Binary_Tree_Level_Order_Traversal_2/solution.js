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
let levelOrderBottom = function(root) {
    if (!root) return []

    let result = []
    let queue = [root]

    while (queue.length > 0) {
        const level_length = queue.length
        let tmp = []
        for (let i = 0; i < level_length; i++) {
            let current = queue.shift()
            tmp.push(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        result.unshift(tmp)
    }
    return result
};