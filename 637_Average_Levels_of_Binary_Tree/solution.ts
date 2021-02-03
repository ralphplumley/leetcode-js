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

function averageOfLevels(root: TreeNode | null): number[] {
    let result: number[] = []
    if (!root) return result
    let queue: TreeNode[] = [root]

    while (queue.length > 0) {
        let level_size: number = queue.length
        let level_values: number[] = []

        for (let i = 0; i < level_size; i ++) {
            let current: TreeNode = queue.shift()
            level_values.push(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }

        // get average of current level
        let level_sum: number = 0
        for (let n of level_values) {
            level_sum += n
        }
        result.push(level_sum / level_values.length)
    }

    return result
};