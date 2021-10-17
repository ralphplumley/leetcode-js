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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count = 0,
        k = targetSum

    const map = new Map()

    const preOrderDFS = (node, currSum) => {
        if (node === null) return

        // current prefix sum
        currSum += node.val

        // here is the sum we're looking for
        if (currSum === k) count++

        // number of times the curr_sum - k has occured already,
        // determines the number of tiems a path with sum k
        // has occured upto the current node
        count += map.has(currSum - k) ? map.get(currSum - k) : 0

        // add the current sum into hashmap
        // to use it during the child nodes processing
        map.set(currSum, map.has(currSum) ? map.get(currSum) + 1 : 1)

        // process left subtree
        preOrderDFS(node.left, currSum)
        // process right subtree
        preOrderDFS(node.right, currSum)

        // remove the current sum from the hasmap
        // in order not to use it during
        // the parallel subtree processing
        map.set(currSum, map.get(currSum) - 1)
    }

    preOrderDFS(root, 0)

    return count
};

/*
    TC: O(N), N = number of nodes, during preorder traversal each node is visited once
    SC: O(N), hashmap of prefix sums, where N is num nodes
*/
