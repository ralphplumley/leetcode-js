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

function minDepth(root: TreeNode | null): number {
    if (!root) return 0
    let queue: TreeNode[] = [root]
    let min_depth: number = 1

    while (queue.length > 0) {
        let level_size: number = queue.length
        for (let i = 0; i < level_size; i++) {
            let current: TreeNode = queue.shift()
            if (!current.left && !current.right) return min_depth
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        min_depth = min_depth + 1
    }

    return min_depth
};