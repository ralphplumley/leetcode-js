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

function binaryTreePaths(root: TreeNode | null): string[] {
    let paths: string[] = []

    function dfs(node, path_so_far) {
        if (!node) return
        if (!node.left && !node.right) {
            paths.push(path_so_far + node.val)
            return
        }

        dfs(node.left, path_so_far + node.val + "->")
        dfs(node.right, path_so_far + node.val + "->")
    }

    dfs(root, "")
    return paths
};

// Time complexity: O(n) - we will traverse every node
// Space complexity: O(h) - height can be at most N (in case of a straight line "tree")