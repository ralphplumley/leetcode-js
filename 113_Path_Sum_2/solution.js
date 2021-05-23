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
    if (!root) return []

    let ans = [],
        past_total = 0
    past_run = []

    const recurse = function(node, past_total, past_run) {

        past_total += node.val
        past_run.push(node.val)

        if (!node.left && !node.right) {
            if (past_total === targetSum) {
                ans.push(past_run.slice())
            }
        }

        if (node.left) recurse(node.left, past_total, past_run)
        if (node.right) recurse(node.right, past_total, past_run)

        past_run.pop()
    }

    recurse(root, past_total, past_run)

    return ans
};
