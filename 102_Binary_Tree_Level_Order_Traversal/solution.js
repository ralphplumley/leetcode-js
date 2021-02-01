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
    let result = []
    if (root === null) return result

    let queue = []
    queue.push(root)
    while (queue.length > 0) {
        let levelSize = queue.length
        let currentLevel = []
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift()
            currentLevel.push(currentNode.val)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        result.push(currentLevel)
    }

    return result
};