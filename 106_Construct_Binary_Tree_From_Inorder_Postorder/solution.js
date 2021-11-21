/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let postorder_index = postorder.length - 1

    // build a map to reference the inorder array index later
    const map = new Map()
    for (let i = 0; i < inorder.length; ++i) {
        const val = inorder[i]
        map.set(val, i)
    }

    // recursive helper function
    const recurse = (in_left, in_right) => {
        // base case - if there are no elements to construct subtrees
        if (in_left > in_right) return null

        // get postorder_index element as a root
        const rootVal = postorder[postorder_index]
        const root = new TreeNode(rootVal)

        // root splits inorder list into left and right subtrees
        const index = map.get(rootVal)

        // recurse
        postorder_index--
        // build right subtree
        root.right = recurse(index + 1, in_right)
        // build left subtree
        root.left = recurse(in_left, index - 1)

        return root
    }

    // kick it off
    return recurse(0, inorder.length - 1)
};

/*
    TC: O(2N) => O(N) - one pass to create the map, one more pass to go through the postorder array
    SC: O(N) - we're storing the entire tree
*/