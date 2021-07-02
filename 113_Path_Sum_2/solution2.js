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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const pathsList = [],
        pathNodes = []

    recurseTree(root, targetSum, pathNodes, pathsList)

    return pathsList
};

const recurseTree = (node, remainingSum, pathNodes, pathsList) => {
    if (!node) return

    // add the current node to the path's list
    pathNodes.push(node.val)

    // check if leaf node, and if it equals our remaining sum
    if (remainingSum === node.val && !node.left && !node.right) {
        pathsList.push(Array.from(pathNodes))
    } else {
        // recurse on the left and right children
        const diff = remainingSum - node.val
        recurseTree(node.left, diff, pathNodes, pathsList)
        recurseTree(node.right, diff, pathNodes, pathsList)
    }

    // pop the node once we are done processing ALL of it's children
    pathNodes.pop()
}
