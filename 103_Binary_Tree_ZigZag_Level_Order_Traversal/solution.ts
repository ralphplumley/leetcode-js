/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = []
    if (!root) return result

    const queue: TreeNode[] = []
    queue.push(root)
    let leftToRight: boolean = true

    while (queue.length > 0) {
        let levelSize: number = queue.length
        let currentLevel: number[] = []

        for (let i = 0; i < levelSize; i++) {
            let currentNode: TreeNode = queue.shift()

            // add the node to the current level based  on the traverse direction
            if (leftToRight) {
                currentLevel.push(currentNode.val)
            } else {
                currentLevel.unshift(currentNode.val)
            }

            // insert the children of current node in the queue
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        result.push(currentLevel)
        // reverse the traverse direction
        leftToRight = !leftToRight
    }
    return result
};