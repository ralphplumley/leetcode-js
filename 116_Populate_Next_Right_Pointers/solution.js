/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null

    // initialize a queue
    const queue = [root]

    // outer while loop which iterates over each level
    while (queue.length > 0) {

        // note the size of the queue currently
        const size = queue.length

        // iterate over all the nodes on the current level
        for (let i = 0; i < size; ++i) {
            let node = queue.shift()

            // this check ensures we don't establish next pointers beyond the end of a level
            if (i < size - 1) node.next = queue[0]

            // add children, if any, to the back of the queue
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    return root
};

/*
    Time: O(n)
    Space: O(1)
*/
