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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = function(root, low, high) {
    let sum = 0

    const recurse = function(node) {
        if (node.left === null && node.right === null) {
            if (node.val >= low && node.val <= high) {
                sum += node.val
            }
            return
        }

        if (node.val >= low && node.val <= high) {
            sum += node.val
        }

        if (node.left !== null) {
            if (node.val >= low) {
                recurse(node.left)
            }
        }

        if (node.right !== null) {
            if (node.val <= high) {
                recurse(node.right)
            }
        }
    }

    recurse(root)
    return sum
}

/*

option 1: hit every node, check if value is between ranges, tally up sum as we go

if the node val is lower than LOW, don't check left children
if the node val is higher than HIGH, don't check right children

I: BST, range of values represented by two variables (low, high)
O: sum integer
C:

----

// setup sum variable
// recursive function(node)
    // base case - if it's a leaf (no children)
        // if it's between Low and high
            // add to sum
        // return

    // if it's between Low and High
        // add to sum

    // if there's a left child
        // if node.val is greater than or equal to low
            // recurse(left child)
    // if there's a right child
        // if node.val is less than or equal to high
            // recurse(right child)

*/