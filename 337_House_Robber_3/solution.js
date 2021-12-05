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
 * @return {number}
 */
var rob = function(root) {

    const memoTake = new Map(),
        memoPass = new Map()

    const dfs = (node, lastTaken) => {
        if (!node) return 0

        let result
        if (lastTaken) {
            if(memoTake.has(node)) return memoTake.get(node)
            result = dfs(node.left, false) + dfs(node.right, false)
            memoTake.set(node, result)
            return result
        } else {
            if (memoPass.has(node)) return memoPass.get(node)
            const take = node.val + dfs(node.left, true) + dfs(node.right, true)
            const pass = dfs(node.left, false) + dfs(node.right, false)
            result = Math.max(take, pass)
            memoPass.set(node, result)
            return result
        }
    }

    return dfs(root, false)
    /*
        TC: O(N) - we have to traverse each node
        SC: O(N) - worst case, it could be a "thin tree", which means for a DFS recursive stack, the stack can be N deep.
    */
};
