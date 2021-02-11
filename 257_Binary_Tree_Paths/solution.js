function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let binaryTreePaths = function(root) {
    let paths = []

    function dfs(root, path_so_far) {
        if (!root) return
        if (!root.left && !root.right) {
            paths.push(path_so_far + root.val)
            return
        }

        dfs(root.left, path_so_far + root.val + "->")
        dfs(root.right, path_so_far + root.val + "->")
    }

    dfs(root, "")
    return paths
};

// Time complexity: O(n) - we will traverse every node
// Space complexity: O(h) - height can be at most N (in case of a straight line "tree")
