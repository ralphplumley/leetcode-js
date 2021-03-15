/*
Best explanation:
https://leetcode.com/problems/binary-tree-maximum-path-sum/discuss/603423/Python-Recursion-stack-thinking-process-diagram
*/

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

function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}

const maxPathSum = function(root) {
    let max_path = -Infinity

    const getMaxGain = function(node) {
        if (node === null) return 0

        let gain_on_left = Math.max(getMaxGain(node.left), 0)
        let gain_on_right = Math.max(getMaxGain(node.right), 0)

        let current_max_path = node.val + gain_on_left + gain_on_right
        max_path = Math.max(max_path, current_max_path)

        return node.val + Math.max(gain_on_left, gain_on_right)
    }

    // kick it off
    getMaxGain(root)
    return max_path
};

// example 1
// let root = new TreeNode(1)
// let c1 = new TreeNode(2)
// let c2 = new TreeNode(3)
// root.left = c1
// root.right = c2

let root = new TreeNode(-10)
let c1 = new TreeNode(9)
let c2 = new TreeNode(20)
root.left = c1
root.right = c2
let c3 = new TreeNode(15)
let c4 = new TreeNode(7)
c2.left = c3
c2.right = c4

console.log(maxPathSum(root))
