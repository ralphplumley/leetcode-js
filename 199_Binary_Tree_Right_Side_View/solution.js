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
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const rightSideView = function(root) {
    if (!root) return []

    let ans = []
    let queue = [root, 'stopper']

    while (queue.length > 1) {
        let node = queue.shift()
        if (node.left !== null) queue.push(node.left)
        if (node.right !== null) queue.push(node.right)
        if (queue[0] === 'stopper') {
            ans.push(node.val)
            queue.shift()
            queue.push('stopper')
        }
    }

    return ans
};

let root = new TreeNode(1)
let c1 = new TreeNode(2)
let c2 = new TreeNode(3)
root.left = c1
root.right = c2

let c3 = new TreeNode(5)
c1.right = c3

let c4 = new TreeNode(4)
c2.right = c4

console.log(rightSideView(root))
